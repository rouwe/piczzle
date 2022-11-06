import createError from 'http-errors';
import { ErrorRequestHandler, RequestHandler } from "express";

// Catch 404 and forward to error handler
export const catchError: RequestHandler = (req, res, next) => {
  next(createError(404));
};

// Error handler
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
}
