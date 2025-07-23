import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

type BaseQueryResult = {
    data?: any;
    error?: FetchBaseQueryError & { data?: any };
    meta: FetchBaseQueryMeta;
};

const handleResponseTransformation = (result: any): BaseQueryResult => {
    // Handle success transformation
    if (result.data) {
        result.data = {
            ...result.data,
            status: result.meta.response?.status,
        };
    }

    // Handle error transformation
    if (result.error?.data) {
        result.error = {
            ...result.error.data,
            status: result.error.status,
        };
    } else if (result.error) {
        const { error, ...rest } = result.error;
        result.error = {
            error: {
                message: error,
            },
            ...rest,
            type: 'API_ERROR',
            success: false,
        };
    }
    return result;
};

export default handleResponseTransformation;
