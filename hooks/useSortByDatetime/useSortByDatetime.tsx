import { useMemo } from 'react';
import { getRelativeTime, sortByDateKey } from '@/utils/common.util';

// This hook sorts an array of objects by a specified date key in ascending or descending order
// It also optionally adds a relative time field to each object based on the specified date key like add 1h 2h 2d etc.
// The sorted data is memoized to avoid unnecessary recalculations on re-renders

const useSortByDatetime = (
    data: any,
    key: string,
    order: 'asc' | 'desc' = 'desc',
    addTimeField = true,
) => {
    const sortedData = useMemo(() => {
        if (!data?.data) return [];
        if (!Array.isArray(data?.data)) return [];

        const sorted = sortByDateKey(data.data, key, order);
        if (!addTimeField) return sorted;
        else
            return sorted.map((item) => ({
                ...item,
                time: getRelativeTime(item[key] as string),
            }));
    }, [data, key, order, addTimeField]);

    return sortedData;
};

export default useSortByDatetime;
