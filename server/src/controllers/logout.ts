import { Request, Response } from 'express';
import { cookieSessionId, cookieUserId } from '../utils/authUtil';

function logoutUserPostHandler(req: Request, res: Response) {
    console.log(req.cookies);
    res.clearCookie(cookieSessionId);
    res.clearCookie(cookieUserId);
    res.json({
        Response: {
            status: "SUCCESS"
        }
    })
}

export default logoutUserPostHandler;