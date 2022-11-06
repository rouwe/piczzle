import express from 'express';

const indexRouter = express.Router();

indexRouter
    .route('/')
    .get((req, res) => {
        res.send("Express GET");
    })
    .post((req, res) => {
        res.send("Express POST")
    });

export default indexRouter;