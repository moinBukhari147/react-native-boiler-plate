// utils/logoutUser.ts
import * as SecureStore from 'expo-secure-store';
import { expireSession, logout } from '@/redux/features/authSlice';
import { AppDispatch } from '@/redux/store';

const logoutUser = async (dispatch: AppDispatch, isSessionExpired: boolean = false) => {
    // Clear tokens from SecureStore and perform logout.
    try {
        // IF SESSION IS EXPRED THEN TOKEN IS ALREADY CLEARED BY tokenManager
        if (isSessionExpired) dispatch(expireSession());
        else {
            await SecureStore.deleteItemAsync('accessToken');
            await SecureStore.deleteItemAsync('refreshToken');
            dispatch(logout());
        }
        // eslint-disable-next-line
    } catch (error) {
        dispatch(logout());
    }
};

export default logoutUser;
