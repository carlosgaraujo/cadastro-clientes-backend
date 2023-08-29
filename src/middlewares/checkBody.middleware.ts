import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { TclientRequest } from "../interfaces/user.interface";

export const checkBody =
    (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
        const validateData: TclientRequest = schema.parse(req.body);

        req.body = validateData;

        return next();
    };
