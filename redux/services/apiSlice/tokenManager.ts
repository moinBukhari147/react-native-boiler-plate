// tokenManager.ts
import { BaseQueryApi } from '@reduxjs/toolkit/query';
import * as SecureStore from 'expo-secure-store';
import getFreshToken from '@/utils/token.util';
import { startRefreshing, stopRefreshing, setAccRefTokens } from '../../features/authSlice';
import { RootState } from '../../store';

// This is a token manager that handles the token refreshing logic.
// It refresh the token and update the secure store and states accordingly.
// If the refresh token is also expired then it will clear the tokens from secure store and you will get the 401 error in api. Now you can safely expire the user session. to reauthenticate him.
// This is also capable of handling the race conditions, means if multiple requests are made at the same time and the token is expired, it will only refresh the token once and all the requests will wait for the new token to be set before proceeding with their original queries.
let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;
export const tokenManager = {
    async refreshToken(api: BaseQueryApi): Promise<string | null> {
        if (!isRefreshing) {
            isRefreshing = true;
            api.dispatch(startRefreshing());
            refreshPromise = (async () => {
                try {
                    const state = api.getState() as RootState;
                    const _refreshToken = state.auth.refreshToken;
                    if (!_refreshToken) throw new Error('No refresh token');

                    const response = await getFreshToken(_refreshToken);
                    if (response.error) {
                        // THIS WILL RE TRIGGER THE FETCH_ERROR FOR API IN BASE QUERY, AND USER WILL NOT BE LOGOUT
                        if (response.error === 'FETCH_ERROR') return state.auth.accessToken;
                        else throw new Error(response.error); // ELSE REMOVE TOKEN & LOGOUT THE USER
                    }

                    const accessToken = response.data?.accessToken;
                    const refreshToken = response.data?.refreshToken;
                    if (!accessToken) throw new Error('Invalid token response');

                    await SecureStore.setItemAsync('accessToken', accessToken);
                    await SecureStore.setItemAsync('refreshToken', refreshToken || _refreshToken);
                    api.dispatch(
                        setAccRefTokens({
                            accessToken,
                            refreshToken: refreshToken || _refreshToken,
                        }),
                    );
                    return accessToken;
                    // eslint-disable-next-line
                } catch (err) {
                    await SecureStore.deleteItemAsync('accessToken');
                    await SecureStore.deleteItemAsync('refreshToken');
                    return null;
                } finally {
                    isRefreshing = false;
                    refreshPromise = null;
                    api.dispatch(stopRefreshing());
                }
            })();
        }
        return refreshPromise!;
    },
};
