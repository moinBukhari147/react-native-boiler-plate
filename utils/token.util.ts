import * as jwtDecode from 'jwt-decode';
import { BASE_URL } from '@/constant/config';

// ========================================
//           Types
// ========================================
type ResposeDataType = {
    accessToken: string;
    refreshToken?: string;
};
type ResposeType = {
    data?: ResposeDataType;
    error?: string;
};

// ========================================
//           Functions
// ========================================
// This function is used in the token manager to get refresh the token.
const getFreshToken = async (refreshToken: string): Promise<ResposeType> => {
    try {
        const response = await fetch(`${BASE_URL}/auth/token-refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${refreshToken}`,
            },
            body: JSON.stringify({}),
        });
        if (!response.ok) {
            return { error: 'TOKEN_EXPIRED' };
        }
        const data = await response.json();
        return { data: data.data };
        // eslint-disable-next-line
    } catch (error) {
        return { error: 'FETCH_ERROR' };
    }
};

export default getFreshToken;

// ================================================================
// This function gives the time remaining in seconds before the access token expires.
// This is useful if we login and and the access token is near to expire.
export const verifyAccessTokenExpiry = (accessToken: string): number => {
    try {
        const decoded = jwtDecode.jwtDecode(accessToken);
        if (!decoded.iat) return 0;
        const currentTime = Math.floor(Date.now() / 1000);

        const expiredAt = decoded.exp;
        if (!expiredAt) return 0;

        const remainingSeconds = expiredAt - currentTime;
        const remainingMins = remainingSeconds / 60;

        return Math.max(0, Math.floor(remainingMins));
        // eslint-disable-next-line
    } catch (error) {
        return 0;
    }
};
