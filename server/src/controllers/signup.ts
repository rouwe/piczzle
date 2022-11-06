import { Response } from 'express';
import ConnectDb from '../db/connect';
import configs from '../configs/configs';
import { validateSignupCredentials } from '../controllers/validate';
import { getHashedPassword } from '../utils/authUtil';

const db = new ConnectDb(configs.db).connect().db("piczzle");
const usersDb = db.collection("users");

type SignupPostHandlerType = {
    userId: string;
    userPassword: string;
    repeatUserPassword: string;
}
async function signupPostHandler(
        res: Response,
        {userId, userPassword, repeatUserPassword}: SignupPostHandlerType
    ) {
    /**
     * Handler for signup route post request.
     * @res - express response object.
     * @userId - username payload.
     * @userPassword - user password payload.
     * @repeatUserPassword - repeated user password payload.
     */
    try {
        // Validate User Payload
        const validityCheck = validateSignupCredentials(userId, userPassword, repeatUserPassword);
        if (typeof validityCheck === "boolean") {
            // Lookup if user exist
            const result = await usersDb.findOne({username: userId});
            if (result) {
                // User already exist
                res.json({
                    Response: {
                        status: "TAKEN"
                    } 
                });
            } else {
                // Register new user
                const hashPassword = getHashedPassword(userPassword);
                usersDb.insertOne({
                    username: userId,
                    password: hashPassword,
                    saved: []
                })
                res.json({
                    Response: "SUCCESS"
                })
            }
        }
    } catch(err) {
            // Validity error result
            res.json({
                "Response": {
                    status: "FAILED",
                    error: err
                }
            })
    }
}

export default signupPostHandler;