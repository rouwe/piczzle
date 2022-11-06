import { Request, Response } from 'express';
import ConnectDb from '../db/connect';
import configs from '../configs/configs';
import { InvalidPayloadValueError, UnknownUserError } from '../utils/errors';
import { validateLoginCredentials } from '../controllers/validate';
import {
    getHashedValue, checkHashedPassword, 
    cookieSessionId, cookieUserId
} from '../utils/authUtil';

const db = new ConnectDb(configs.db).connect().db("piczzle");
const usersDb = db.collection("users");

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
            const lookupResult = await usersDb.findOne(query);
            if (lookupResult) {
                const hashedPassword = lookupResult.password;
                // Compare payload raw password and decrypted password
                const passwordCheck = checkHashedPassword(payloadUserPassword, hashedPassword);
                if (passwordCheck) {
                    // Hash user id to be used as cookie
                    const hashedUserId = getHashedValue(payloadUserId);
                    // Set cookie
                    res.cookie(cookieSessionId, req.sessionID)
                        .cookie(cookieUserId, hashedUserId);
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