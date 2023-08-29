import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import {
    TclientRequest,
    TclientResponse,
} from "../../interfaces/user.interface";
import AppError from "../../errors";
import { clientSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (
    data: TclientRequest
): Promise<TclientResponse> => {
    const { email, nomeCompleto, password, telefone } = data;
    const clientRepository = AppDataSource.getRepository(User);

    const findClient = await clientRepository.findOne({
        where: {
            email,
        },
    });

    if (findClient) {
        throw new AppError("User already exists", 409);
    }

    const hashPassword = await hash(password, 10);

    const user = clientRepository.create({
        nomeCompleto,
        email,
        telefone,
        password: hashPassword,
    });

    await clientRepository.save(user);
    user.id = user.id.toString();
    return clientSchemaResponse.parse(user);
};
