import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { login } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import getFreshToken, { verifyAccessTokenExpiry } from '@/utils/token.util';

// This hook initializes the authentication state of the app
// It checks for existing tokens in secure storage and verifies their validity
// If the access token is about to expire, it fetches a new one using the refresh token
// If the tokens are valid, it dispatches a login so that token are stored in state and user got authenticated. else it clears the tokens from secure storage.
const useInitAuth = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const initAuth = async () => {
            try {
                setLoading(true);
                let accessToken = await SecureStore.getItemAsync('accessToken');
                let refreshToken = await SecureStore.getItemAsync('refreshToken');
                if (!refreshToken || !accessToken) {
                    setLoading(false);
                    return;
                }

                const accessRemMins = verifyAccessTokenExpiry(accessToken);

                if (accessRemMins <= 5) {
                    const response = await getFreshToken(refreshToken);
                    if (response.error === 'TOKEN_EXPIRED') {
                        await SecureStore.deleteItemAsync('accessToken');
                        await SecureStore.deleteItemAsync('refreshToken');
                        setLoading(false);
                        return;
                    } else if (response.data) {
                        accessToken = response.data.accessToken;
                        refreshToken = response.data.refreshToken || refreshToken;
                        await SecureStore.setItemAsync('accessToken', accessToken);
                        await SecureStore.setItemAsync('refreshToken', refreshToken);
                    } // ELSE FETCH_ERROR SO WE ARE NOT LOGGING OUT USER BECAUSE OF NETWROK ISSUE
                }
                dispatch(login({ accessToken, refreshToken }));
                setLoading(false);
                // eslint-disable-next-line
            } catch (err) {
                setLoading(false);
            }
        };
        initAuth();
    }, [dispatch]);

    return { isLoading };
};

export default useInitAuth;
