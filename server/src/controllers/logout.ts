import { Request, Response } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { usersCollection } from '../db/connect';
import { cookieSessionId, cookieUserId } from '../utils/authUtil';
import { UnknownUserError } from '../utils/errors';

async function logoutUserPostHandler(req: Request, res: Response) {
    try {
        // Validate user credential
        const userId: string = req.cookies.u_Id;
        const userData = await usersCollection.findOne({username: userId});
        if (userData) {
            // Delete user saved piczzles files
            const userSavedDataArr: string[] = userData.saved;
            userSavedDataArr.map((filename) => {
                const filePath = `./upload/saved/${filename}`;
                const fileExistenceCheck = fs.existsSync(filePath);
                console.log(`File Exist: ${filePath}`, fileExistenceCheck);
                if (fileExistenceCheck) {
                    // Delete file if exist
                    fs.unlink(filePath, (err) => {
                        console.log("Deleting")
                        if (err) throw new Error(`Failed to delete file: ${filename}`);
                        console.log(`Deleted File: ${filePath}`);
                    });
                }
            })
            // Clear cookies
            res.clearCookie(cookieSessionId);
            res.clearCookie(cookieUserId);
            res.json({
                Response: {
                    status: "SUCCESS"
                }
            })
        } else {
            throw new UnknownUserError("User not found.");
        }

    } catch(err) {
        res.json({
            Response: {
                status: "FAILED",
                error: err
            }
        })
    }
}

export default logoutUserPostHandler;