import { 
    PasswordMatchValidationError, CharacterLengthValidationError,
    InvalidPayloadValueError
 } from '../utils/errors';

export function validateSignupCredentials(uId: string, pass: string, repass: string): boolean {
    /**
     * Returns the result of validating signup payload and throws an error when it fails.
     * @uId - user identifier(userId) when logging in.
     * @pass - user password.
     * @repass - user repeated password.
     */
    // Check payload values
    validatePayloadValues([uId, pass, repass]);
    // Password and repeat password does not match
    checkPasswordMatch(pass, repass);
    // Character does not meet the min(8) and max(64) length
    checkCharacterLength(uId);
    checkCharacterLength(pass);

    return true;
}

export function validateLoginCredentials(uId: string, pass: string): boolean {
    /**
     * Returns the result of validating login payload and throws an error when it fails.
     * @uId - user identifier(userId) when logging in.
     * @pass - user password.
     */
    // Check payload values
    validatePayloadValues([uId, pass]);
    // Character does not meet the min(8) and max(64) length.
    checkCharacterLength(uId);
    checkCharacterLength(pass);

    return true;
}

const validatePayloadValues = (payloadArr: Array<string>): void => {
    // Prevent undefined payload values
    for (const payload of payloadArr) {
        if (!payload) {
            throw new InvalidPayloadValueError("Undefined payload values.")
        }
    }
}

const checkPasswordMatch = (password: string, repeatPassword: string): void => {
    /**
     * Make sure both password are the same or else throw an error.
     * @password - password payload.
     * @repeatPassword - repeat password payload.
     */
    if (password !== repeatPassword) { 
        throw new PasswordMatchValidationError("Password and repeat password does not match.");
    }
}

const checkCharacterLength = (value: string, minLength=8, maxLength=64): void => {
    /**
     * Make sure that the characters length of the value is withing the required range.
     * @value - a string value.
     */

    const valueLength = value.length;
    if (valueLength < minLength && valueLength > maxLength) {
        throw new CharacterLengthValidationError("Value does not meet the required length.");
    }
}