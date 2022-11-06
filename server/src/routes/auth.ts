import express from 'express';
import signupPostHandler from '../controllers/signup';

const authRouter = express.Router();
const viewURI = 'http://localhost:3000';
const viewLogin = `${viewURI}/auth/login`;
const viewSignUp = `${viewURI}/auth/signup`;

authRouter
    .route('/login')
    .get((req, res) => {
        res.json({"GET - Login": "Success"});
    })
    .post((req, res) => {
        console.log(req.body);
        res.cookie("sessionID", req.sessionID)
            .cookie("u_Id", req.body.userId);
        res.json({"Logged": "success"});
    });

authRouter
    .route('/signup')
    .get((req, res) => {
        res.json({"GET Notice": "Error: permission not granted!"});
    })
    .post((req, res) => {
        const userId: string = req.body.userId;
        const userPassword: string = req.body.userPassword;
        const repeatUserPassword: string = req.body.repeatUserPassword;
        // New user registration
        signupPostHandler(res, { userId, userPassword, repeatUserPassword });
    });

export default authRouter;