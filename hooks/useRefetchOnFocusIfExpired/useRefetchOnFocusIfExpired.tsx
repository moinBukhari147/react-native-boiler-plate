import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef } from 'react';

// This the custom hook to refetch data when the component is mounted but  screen came in focused again after expiry time
// It takes a refetch function and an optional expiry time in seconds (default is 30 seconds)
// It uses useFocusEffect to check if the screen is focused and if the time since last blur exceeds the expiry time
// If so, it calls the refetch function to refresh the data

export const useRefetchOnFocusIfExpired = (refetch: () => void, expiryTime: number = 30) => {
    const blurTimeRef = useRef<number | null>(null);

    useFocusEffect(
        useCallback(() => {
            const now = Date.now();
            const expiryTimeInMs = expiryTime * 1000;
            if (blurTimeRef.current && now - blurTimeRef.current > expiryTimeInMs) {
                refetch();
            }

            blurTimeRef.current = null;

            return () => {
                blurTimeRef.current = Date.now();
            };
        }, [refetch, expiryTime]),
    );
};
