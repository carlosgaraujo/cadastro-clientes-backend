import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entitie";
import AppError from "../errors";

export const verifyEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const email: string = req.body.email;

    if (!email) {
        return next();
    }

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const emailUser: User | null = await userRepository.findOne({
        where: {
            email: email,
        },
    });

    if (emailUser) {
        throw new AppError("Email already exists", 409);
    } else {
        return next();
    }
};
