import dotenv from 'dotenv'
import { Request } from 'express';
import { FileFilterCallback } from 'multer';
import { ConnectDbConstructorType } from '../db/connect';

dotenv.config();
// Helmet
const helmetConfig = {};
// Cors
const corsConfig = {
    origin: "http://localhost:3000",
    methods: "GET, PUT, POST, DELETE, OPTIONS",
    credentials: true,
}
// Express JSON
const expressJsonConfig = {type: "application/json"};
// Morgan
const loggerConfig = 'dev';
// Express Session
const sessionConfig = {
    secret: process.env.SESSION_SECRET as string,
    resave: true,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false
    }
}
// Express URL Encoded
const urlEncodedConfig = { extended: true };

const dbConfig = ((): ConnectDbConstructorType => {
    if (!process.env.DB_HOST || !process.env.DB_PORT) {
        throw new Error("Invalid database connection configuration.");
    } 
    return {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
})()

const multerConfig = {
    dest: "/server/upload/temp/",
    fileFilter: function (req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
        const typeArr = file.mimetype.split('/');
        const fileType = typeArr[1];
        const allowedTypesArr = ["jpeg", "jpg", "png", "jfif", "webp"];
        if (allowedTypesArr.includes(fileType)) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
};

export default {
    helmet: helmetConfig,
    logger: loggerConfig,
    session: sessionConfig,
    urlEncoded: urlEncodedConfig,
    expressJson: expressJsonConfig,
    cors: corsConfig,
    db: dbConfig,
    multer: multerConfig
}