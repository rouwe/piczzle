import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cors from 'cors';
import configs from './configs/configs';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { errorHandler, catchError } from './middlewares/error';
import router from './routes/router';
import { closeClientDb } from './db/close';

const app = express();
const PORT = 5000;

app.use(logger(configs.logger));
app.use(cors(configs.cors))
app.use(helmet(configs.helmet));
app.use(cookieParser());
app.use(session(configs.session));
app.use(express.json(configs.expressJson));
app.use(express.urlencoded(configs.urlEncoded));

app.use('/', router.index);
app.use('/auth', router.auth);

// Catch 404 and forward to error handler
app.use(catchError);
// Error handler
app.use(errorHandler);
// Close database
closeClientDb();
// Server setup
app.listen(PORT,() => {
    console.log(`The application is listening on port http://localhost:${PORT}`);
})