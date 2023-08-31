import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import AppError from "../../errors";
import { TloginRequest } from "../../interfaces/login.interface";
import Jwt from "jsonwebtoken";
import "dotenv/config";
import Contact from "../../entities/contact.entitie";

export const createTokenService = async ({
    email,
    password,
}: TloginRequest): Promise<object> => {
    const userRepository = AppDataSource.getRepository(User);
    const contactRepository = AppDataSource.getRepository(Contact);

    const user = await userRepository.findOne({
        where: {
            email,
        },
    });

    const contacts = await userRepository.find({
        relations: {
            contacts: true,
        },
    });

    if (!user) {
        throw new AppError("Invalid Credentials", 403);
    }
    const passwordMath = await compare(password, user.password);

    if (!password) {
        throw new AppError("Invalid Credentials", 403);
    }

    const token = Jwt.sign(
        { username: user.nomeCompleto },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN!.toString(),
            subject: user.id.toString(),
        }
    );

    const authResponse = {
        user: {
            id: user.id,
            nomeCompleto: user.nomeCompleto,
            email: user.email,
            telefone: user.telefone,
            dataRegistro: user.dataRegistro,
            contacts: contacts,
        },
        token,
    };

    return authResponse;
};
