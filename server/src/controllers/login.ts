import { Request, Response } from 'express';
import { UnknownUserError } from '../utils/errors';
import { usersCollection } from '../db/connect';
import { validateLoginCredentials, checkHashedPassword } from '../controllers/validate';
import {
    cookieSessionId, cookieUserId
} from '../utils/authUtil';


async function loginUserPostHandler(req: Request, res: Response) {
    /**
     * Handler for login route post request.
     * @req - express request object.
     * @res - express response object.
     */
    try {
        const payloadUserId: string = req.body.userId;
        const payloadUserPassword: string = req.body.userPassword;
        // Validate User Payload
        const payloadIsValid = validateLoginCredentials(payloadUserId, payloadUserPassword);
        if (payloadIsValid) {
            // Lookup username
            const query = {username: payloadUserId};
            const lookupResult = await usersCollection.findOne(query);
            if (lookupResult) {
                const hashedPassword: string = lookupResult.password;
                // Compare payload raw password and decrypted password
                const passwordCheck = checkHashedPassword(payloadUserPassword, hashedPassword);
                if (passwordCheck) {
                    // Set cookie
                    res.cookie(cookieSessionId, req.sessionID)
                        .cookie(cookieUserId, payloadUserId);
                    res.json({
                        Response: {
                            status: "SUCCESS",
                        }
                    });
                }
            } else {
                // User not found
                throw new UnknownUserError("User not found.");
            }
        }
    } catch(err) {
        // Validity error
        res.json({
            Response: {
                status: "FAILED",
                error: err
            }
        })
    }
}


export default loginUserPostHandler;