import { Request , Response } from 'express';
import { usersCollection } from '../db/connect';
import { validateSignupCredentials } from '../controllers/validate';
import { getHashedValue } from '../utils/authUtil';

async function signupUserPostHandler(req: Request, res: Response) {
    /**
     * Handler for signup route post request.
     * @res - express response object.
     * @userId - username payload.
     * @userPassword - user password payload.
     * @repeatUserPassword - repeated user password payload.
     */
    try {
        const payloadUserId: string = req.body.userId;
        const payloadUserPassword: string = req.body.userPassword;
        const payloadRepeatUserPassword: string = req.body.repeatUserPassword;
        // Validate User Payload
        const payloadIsValid = validateSignupCredentials(payloadUserId, payloadUserPassword, payloadRepeatUserPassword);
        if (payloadIsValid) {
            // Lookup if user exist
            const query = {username: payloadUserId};
            const lookupResult = await usersCollection.findOne(query);
            if (lookupResult) {
                // User already exist
                res.json({
                    Response: {
                        status: "TAKEN"
                    } 
                });
            } else {
                // Register new user
                const hashPassword = getHashedValue(payloadUserPassword);
                usersCollection.insertOne({
                    username: payloadUserId,
                    password: hashPassword,
                    saved: []
                })
                res.json({
                    Response: {
                        status: "SUCCESS",
                    }
                })
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

export default signupUserPostHandler;