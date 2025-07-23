// ===========================================================
//                          PUBLIC_ENDPOINTS
// ===========================================================
// These are the endpoints that do not require authentication.
// So the Authorization token bearer header will not be added for these endpoints.
// Customize this list according to your API requirements.
const PUBLIC_ENDPOINTS = [
    'login',
    'signup',
    'otp-verify',
    'otp-resend',
    'password-forget',
    'password-forget-otp-verify',
];

export default PUBLIC_ENDPOINTS;
