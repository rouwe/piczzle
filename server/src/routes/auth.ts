import express from 'express';
import signupPostHandler from '../controllers/signup';
import loginPostHandler from '../controllers/login';

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
        // Login user
        loginPostHandler(req, res);
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
        signupPostHandler(req, res);
    });

export default authRouter;