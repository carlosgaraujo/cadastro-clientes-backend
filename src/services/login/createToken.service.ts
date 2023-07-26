import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import Cliente from "../../entities/cliente.entitie";
import AppError from "../../error";
import { TloginRequest } from "../../interfaces/login.interface";
import Jwt from "jsonwebtoken";
import "dotenv/config";

export const createTokenService = async ({
    email,
    password,
}: TloginRequest): Promise<string> => {
    const clienteRepository = AppDataSource.getRepository(Cliente);

    const cliente = await clienteRepository.findOne({
        where: {
            email,
        },
    });

    if (!cliente) {
        throw new AppError("Invalid Credentials", 403);
    }

    const passwordMath = await compare(password, cliente.password);

    if (!password) {
        throw new AppError("Invalid Credentials", 403);
    }

    const token = Jwt.sign(
        { username: cliente.nomeCompleto },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN!.toString(),
            subject: cliente.id.toString(),
        }
    );
    return token;
};
