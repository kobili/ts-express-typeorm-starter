import { NextFunction, Request, Response } from "express";
import { ApiError } from "../exceptions/HttpError";

export const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    next(err);
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        return res.status(err.httpCode).send({
            message: err.message,
        });
    }
    return res.status(500).send({
        message: "Internal server error",
        error: err,
    });
}
