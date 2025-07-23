import {
    fetchBaseQuery,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/constant/config';
import handleResponseTransformation from '@/utils/responseTranformer';
import PUBLIC_ENDPOINTS from './publicEndpoint';
import { tokenManager } from './tokenManager';
import { RootState } from '../../store';

// ===========================================================
//                          BASE_QUERY
// ===========================================================
// Add you customized headers here.
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
        const state = getState() as RootState;
        const token = state.auth.accessToken; // Read from Redux
        if (token && !PUBLIC_ENDPOINTS.includes(endpoint)) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

// =========================================
export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result: any = await baseQuery(args, api, extraOptions);

    // Skip processing for public endpoints and non-401 errors
    if (result.error?.status === 401 && !PUBLIC_ENDPOINTS.includes(api.endpoint)) {
        try {
            const refreshedToken = await tokenManager.refreshToken(api);
            // We are not performing the logout functionality here.
            // It will be performed in the Screen After showing the error message to user.
            // If the token refreshed successfully, the new results will be returned, else result with previous error returned
            if (refreshedToken) {
                result = await baseQuery(args, api, extraOptions); // Retry original query with new token
            }
        } catch (error) {
            console.error('TokenManger raised the error:', error);
        }
    }
    return handleResponseTransformation(result);
};
