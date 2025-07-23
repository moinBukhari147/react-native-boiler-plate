import { apiSlice, ResponseType } from '../../apiSlice/apiSlice';

// Update these according to your API endpoints
// Just add the folder and files according to your API structure
// And Inject the endpoints like this in required files
// ===========================================================
//                          Slice
// ===========================================================

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        singup: builder.mutation({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: credentials,
            }),
        }),
        me: builder.query<ResponseType, void>({
            query: () => ({
                url: '/auth/me',
                method: 'GET',
                keepUnusedDataFor: 0,
                refetchOnMountOrArgChange: true, // Refetch every time
            }),
            // providesTags: ['Me'], These should be added in the apiSlice.ts file in order to invalidate the cache on specific mutations
        }),
        verifyOtp: builder.mutation<ResponseType, any>({
            query: (payload) => ({
                url: '/auth/otp-verify',
                method: 'POST',
                body: payload,
            }),
        }),
        resendOtp: builder.mutation<ResponseType, any>({
            query: (payload) => ({
                url: '/auth/otp-resend',
                method: 'POST',
                body: payload,
            }),
        }),
        forgetPassword: builder.mutation<ResponseType, any>({
            query: (payload) => ({
                url: '/auth/password-forget',
                method: 'POST',
                body: payload,
            }),
        }),
        forgetPasswordOtpVerify: builder.mutation<ResponseType, any>({
            query: (payload) => ({
                url: '/auth/password-forget-otp-verify',
                method: 'POST',
                body: payload,
            }),
        }),
        forgetPasswordReset: builder.mutation<ResponseType, any>({
            query: (payload) => ({
                url: '/auth/password-reset',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
    overrideExisting: true,
});

export const {
    useForgetPasswordMutation,
    useForgetPasswordOtpVerifyMutation,
    useForgetPasswordResetMutation,
    useLoginMutation,
    useLazyMeQuery,
    useMeQuery,
    useResendOtpMutation,
    useSingupMutation,
    useVerifyOtpMutation,
} = authApi;
