import { NextFunction, Request, Response } from "express";
import AppError from "../errors";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { error } from "console";

export const checkToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        throw new AppError("Missing bearer token", 401);
    }

    const splitedToken = authorization.split(" ")[1];

    jwt.verify(
        splitedToken,
        process.env.SECRET_KEY!.toString(),
        (error: any, decoded: any) => {
            if (error) {
                throw new AppError(error.message, 401);
            }
            res.locals.user = decoded.sub;
            return next();
        }
    );
};
