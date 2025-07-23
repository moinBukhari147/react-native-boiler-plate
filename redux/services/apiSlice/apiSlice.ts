import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';

// ===========================================================
//                          Types
// ===========================================================
export type ResponseType = {
    data?: any;
    status: number;
    message?: string;
    success: boolean;
};

// ===========================================================
//                          Slice
// ===========================================================

// Add all the endpoints tag here that need to be invalidated on any specific api mutation.
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth, // This base query is customized with the reauth logic, means if the token is expired, it will automatically refresh the token and retry the original query.
    tagTypes: [],
    endpoints: () => ({}),
});
