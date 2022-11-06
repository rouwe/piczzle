import express from 'express';
import signupUserPostHandler from '../controllers/signup';
import loginUserPostHandler from '../controllers/login';
import logoutUserPostHandler from '../controllers/logout';

const authRouter = express.Router();
const viewURI = 'http://localhost:3000';
const viewLogin = `${viewURI}/auth/login`;
const viewSignUp = `${viewURI}/auth/signup`;

authRouter
    .route('/login')
    .get((req, res) => {
        res.json({"GET Notice": "Error: permission not granted!"});
    })
    .post((req, res) => {
        // Login user
        loginUserPostHandler(req, res);
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
        signupUserPostHandler(req, res);
    });

authRouter
    .route('/logout')
    .get((req, res) => {
        res.json({"GET Notice": "Error: permission not granted!"});
    })
    .post((req, res) => {
        // Logout user
        logoutUserPostHandler(req, res);
    })

export default authRouter;