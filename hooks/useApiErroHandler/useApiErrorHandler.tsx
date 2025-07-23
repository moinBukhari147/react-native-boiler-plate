import { useEffect } from 'react';
import { ERRORS } from '@/constant';
import { useAppDispatch } from '@/redux/hooks';
import logoutUser from '@/utils/logout.util';
import { ErrorsType } from '@/utils/validation.util';

const useApiErrorHandler = (
    err: any,
    setError: React.Dispatch<React.SetStateAction<ErrorsType>>,
) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!err || (typeof err === 'object' && Object.keys(err).length === 0)) return;
        if (err.status === 401 || (err.status === 403 && err.type === 'blacklist'))
            logoutUser(dispatch, true);
        else if (err.status === 'FETCH_ERROR') setError({ message: ERRORS.network });
        else setError(err.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [err]);
};

export default useApiErrorHandler;
