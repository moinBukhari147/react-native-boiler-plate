import { RefObject } from 'react';
import { ErrorsType, RequiredFields, ValidationField } from './validation.util';

// ================================================================
//                       Common Utility Functions
// ================================================================

// This function is used to apply the sleep for any type of testing in code.
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ==============================================================
// This function function is used to customzied the phone number format.
// You can customize it according to your needs.
// It takes the cleaned phone number and returns the formatted phone number.
export const getFormattedPhone = (cleanedPhone: string) => {
    if (cleanedPhone.length > 4) {
        // If length>4 then match make the below format.
        const match = cleanedPhone.match(/^(\d{4})(\d{0,4})(\d{0,3})$/); // Check the cleaned number length
        if (match) {
            const formattedNumber = `${match[1]}-${match[2]} ${match[3]}`.trim();
            return formattedNumber;
        }
    } else {
        return cleanedPhone;
    }
};

// =================================================================
// This function takes a field and an error object and removes the field from the error object.
export const removeErrorField = (field: ValidationField | RequiredFields, errorObj: ErrorsType) => {
    const { [field]: _omit, ...rest } = errorObj;
    return rest;
};

// =================================================================
// We store the error in the error object so if the error object hae the message key the error is shown in the toast.
// To hide the error toast we remove the message key from the error object.
export const closeErrorToast = (
    error: ErrorsType,
    setError: React.Dispatch<React.SetStateAction<ErrorsType>>,
) => {
    const rest = removeErrorField('message', error);
    setError(rest);
};

// =================================================================
// This function is used to throttle the button from ref so that it can be used to prevent multiple clicks.
export const throttleRef = (ref: RefObject<boolean>, delay = 200) => {
    if (ref.current) return false;

    ref.current = true;
    setTimeout(() => {
        ref.current = false;
    }, delay);

    return true;
};
// =================================================================
// This function is used to throttle the button from state so that it can be used to prevent multiple clicks.
export const throttleState = (
    setThrottle: React.Dispatch<React.SetStateAction<boolean>>,
    delay = 200,
) => {
    setThrottle(true);
    setTimeout(() => {
        setThrottle(false);
    }, delay);

    return true;
};

// =================================================================
// This function takes a data of birth and returns the age in years.
export const getAge = (dob: string) => {
    const currentDate = new Date();
    const dobDate = new Date(dob);
    const timeDiff = currentDate.getTime() - dobDate.getTime();
    // Calculate the number of milliseconds in a year (365.25 days)
    const msInYear = 1000 * 60 * 60 * 24 * 365.25;
    const yearsSince = Math.floor(timeDiff / msInYear);
    // Return the number of years
    return yearsSince;
};

// =================================================================
export const formatOtp = (otp: string) => {
    let formatted = otp[0];
    for (let i = 1; i < otp.length; i++) {
        formatted += ' ' + otp[i];
    }
    return formatted;
};

// =================================================================
// This function takes the dates in string format and return the relative time like 1y, 2m, 3w, 4d, 5h, 6m, 7s
export const getRelativeTime = (dateString: string): string => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now.getTime() - past.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years}y`;
    if (months > 0) return `${months}m`;
    if (weeks > 0) return `${weeks}w`;
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
};

// =================================================================
// This function takes the array of object and the date key and sorts the data assending or descending based on sort order.
type SortOrder = 'asc' | 'desc';
export const sortByDateKey = <T extends Record<string, any>>(
    array: T[],
    key: keyof T,
    order: SortOrder = 'desc',
): T[] => {
    return array.slice().sort((a, b) => {
        const timeA = new Date(a[key] ?? 0).getTime();
        const timeB = new Date(b[key] ?? 0).getTime();

        // If the date is invalid, Date.getTime() returns NaN
        const isInvalidA = isNaN(timeA);
        const isInvalidB = isNaN(timeB);

        // Always push invalid dates to the end
        if (isInvalidA && isInvalidB) return 0;
        if (isInvalidA) return 1;
        if (isInvalidB) return -1;

        return order === 'asc' ? timeA - timeB : timeB - timeA;
    });
};

// =================================================================
// This function takes an array of data to shuffle it randomly.
export const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
