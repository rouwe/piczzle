import { Request, Response } from 'express';
import { cookieSessionId, cookieUserId } from '../utils/authUtil';

function logoutUserPostHandler(req: Request, res: Response) {
    // Clear cookies
    res.clearCookie(cookieSessionId);
    res.clearCookie(cookieUserId);
    res.json({
        Response: {
            status: "SUCCESS"
        }
    })
}

export default logoutUserPostHandler;