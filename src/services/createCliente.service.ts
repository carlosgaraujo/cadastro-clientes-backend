import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import Cliente from "../entities/cliente.entitie";
import {
    TclienteRequest,
    TclienteResponse,
} from "../interfaces/cliente.interface";
import AppError from "../error";

export const createUserService = async (
    data: TclienteRequest
): Promise<TclienteResponse> => {
    const { email, nomeCompleto, password, telefone } = data;
    const clienteRepo = AppDataSource.getRepository(Cliente);

    const findCliente = await clienteRepo.findOne({
        where: {
            email,
        },
    });
    console.log(findCliente);
    if (findCliente) {
        throw new AppError("Cliente already exists", 409);
    }

    const hashPassword = await hash(password, 10);

    const cliente = clienteRepo.create({
        nomeCompleto,
        email,
        telefone,
        password: hashPassword,
    });

    await clienteRepo.save(cliente);

    return cliente;
};
