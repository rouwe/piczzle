export function validateSignupCredentials(uId: string, pass: string, repass: string): 
    boolean | string {
    /**
     * Returns a boolean value that indicates the validation result.
     * @uId - user identifier(userId) when logging in.
     * @pass - user password.
     * @repass - user repeated password.
     */

    // Password and repeat password does not match
    if (pass !== repass) {
        throw new PasswordMatchValidationError("Password and repeat password does not match.");
    }
    // Character does not meet the min(8) and max(64) length
    const uIdLength = uId.length;
    const passLength = pass.length;
    const minLength = 8, maxLength = 64;
    if (uIdLength < minLength && uIdLength > maxLength) {
        // Check user id length
        throw new CharacterLengthValidationError("Value character does not meet the required length.");
    } else if (passLength < minLength || passLength > maxLength) {
        // Check password length
        throw new CharacterLengthValidationError("Value character does not meet the required length.");
    }
    // Valid credentials
    return true;
}

class PasswordMatchValidationError extends Error {
    constructor (message: string) {
        super(message);
        this.name = "PasswordMatchValidationError";
    }
}

class CharacterLengthValidationError extends Error {
    constructor (message: string) {
        super(message);
        this.name = "CharacterLengthValidationError";
    }
}