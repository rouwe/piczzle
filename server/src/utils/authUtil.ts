import bcrypt from 'bcryptjs';

export function getHashedPassword(password: string): string {
    /**
     * Returns the hash password.
     * @param password - the raw password.
     */
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    
    return hash;
}