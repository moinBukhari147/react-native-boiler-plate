import { getAge } from './common.util';

// =================================================================
//                            Types
// =================================================================
// Add or update the fields name on which validation is required.
// And Define the custom validation logic for each field.
export type ValidationField = 'phoneNumber' | 'dateOfBirth' | 'password' | 'otp'; // Extend as needed
type ValidatorFn = (value: string | undefined) => string | undefined;
type ValidationFieldsType = Partial<Record<ValidationField, string>>;

// Just add the fields name on which only required fields validation has to be applied.
export type RequiredFields = 'message' | 'firstName' | 'lastName' | 'city' | 'degree' | 'district';
type RequiredFieldsType = Partial<Record<RequiredFields, string>>;
export type ErrorsType = Partial<Record<ValidationField | RequiredFields, string>>;

// =================================================================
//                            Validation
// =================================================================
const validators: Record<ValidationField, ValidatorFn> = {
    dateOfBirth: (dob) => {
        if (!dob) return 'This field is required.';
        const age = getAge(dob);
        if (age < 18) return 'You must be at least 18 years old.';
        return;
    },
    otp: (otp) => {
        if (!otp) return 'This field is required.';
        if (otp.length < 6) return 'OTP is incomplete.';
        return;
    },
    phoneNumber: (phone) => {
        if (!phone) return 'This field is required.';
        if (phone.length < 11) return 'Phone number is incomplete.';
        if (phone[0] !== '0' || phone[1] !== '3')
            return 'Phone number must start with 03 and  should be Pakistani.';
        if (phone[2] > '5') return 'Invalid phone number.';
        return;
    },
    password: (password) => {
        if (!password) return 'This field is required.';
        if (password.length < 8) return 'Password must be at least 8 characters.';
        const strongPasswordRegex =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!strongPasswordRegex.test(password))
            return 'Password must contain at least one uppercase letter, one numeric digit and one special character.';
        return;
    },
};

// // =================================================================
// //                           Validation Function
// // =================================================================
// This function is used to validate the fields based on the defined validators.
// It takes the object of any combination of fields defined in ValidationFieldsType and returns an object stating error corresponding to each field.
export const validateFields = (fields: ValidationFieldsType): ErrorsType => {
    const errors: ErrorsType = {};
    for (const key in fields) {
        const field = key as ValidationField;
        const value = fields[field];
        if (field in validators) {
            const error = validators[field](value);
            if (error) {
                errors[field] = error;
                if (!errors.message && error === 'This field is required.')
                    errors['message'] = 'Please fill all the required fields.';
            }
        }
    }
    return errors;
};

// ================================================================
// If you only for required fields validation. The custom validation logic come in validateFields function.
export const validateRequiredFields = (fields: RequiredFieldsType): ErrorsType => {
    const errors: ErrorsType = {};
    for (const key in fields) {
        const field = key as RequiredFields;
        const value = fields[field];
        if (!value) {
            errors[field] = 'This field is required.';
            errors['message'] = 'Please fill all the required fields.';
        }
    }
    return errors;
};

// ================================================================
// This function if just for simplify the check that does the errors object has any error or not.
// It takes the object of error return by the validateFields or validateRequiredFields function.
// If there is any error it sets the error state and returns true, otherwise it clears the error state and returns false.
// This is useful in the form submission to check if there are any validation errors.
export const hasValidationErrors = (
    errors: ErrorsType,
    setError: React.Dispatch<React.SetStateAction<ErrorsType>>,
): boolean => {
    if (Object.keys(errors).length > 0) {
        setError(errors);
        return true;
    }
    setError({});
    return false;
};
