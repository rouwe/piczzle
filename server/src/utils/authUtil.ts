import bcrypt from 'bcryptjs';
import { InvalidPasswordError } from '../utils/errors';

export function getHashedValue(value: string): string {
    /**
     * Returns the hash password.
     * @param value - the raw value to encrypt.
     */
    const saltRounds = 10;
    const hashedValue = bcrypt.hashSync(value, saltRounds);
    
    return hashedValue;
}

export function checkHashedPassword(rawPassword: string, hashedPassword: string): boolean {
    /**
     * Returns the result of password check between user input and the decrypted one.
     */
    const comparisonResult = bcrypt.compareSync(rawPassword, hashedPassword);
    if (!comparisonResult) {
        throw new InvalidPasswordError("Wrong password.");
    }

    return true;
}
// Cookie key for sessionId
export const cookieSessionId = "sessionID";
// Cookie key for user id
export const cookieUserId = "u_Id";