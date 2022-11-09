import bcrypt from 'bcryptjs';

export function getHashedValue(value: string): string {
    /**
     * Returns the hash password.
     * @param value - the raw value to encrypt.
     */
    const saltRounds = 10;
    const hashedValue = bcrypt.hashSync(value, saltRounds);
    
    return hashedValue;
}

// Cookie key for sessionId
export const cookieSessionId = "sessionID";
// Cookie key for user id
export const cookieUserId = "u_Id";