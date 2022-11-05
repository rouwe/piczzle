import dotenv from 'dotenv'

dotenv.config();
console.log(process.env.SERVER_URL)
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

export default {
    helmet: helmetConfig,
    logger: loggerConfig,
    session: sessionConfig,
    urlEncoded: urlEncodedConfig,
    expressJson: expressJsonConfig,
    cors: corsConfig
}