import express from 'express';

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
        console.log("Prev Cookies", req.headers.cookie);
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
        console.log(req.body);
        console.log("Prev Cookies", req.headers.cookie);
        res.cookie("sessionID", req.sessionID)
            .cookie("u_Id", req.body.userId);

        res.json({"Registered": "success"});
    });

export default authRouter;