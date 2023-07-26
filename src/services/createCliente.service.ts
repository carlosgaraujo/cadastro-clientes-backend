import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import Cliente from "../entities/cliente.entitie";
import {
    TclienteRequest,
    TclienteResponse,
} from "../interfaces/cliente.interface";
import AppError from "../error";
import { clienteSchemaResponse } from "../schemas/cliente.schema";

export const createUserService = async (
    data: TclienteRequest
): Promise<TclienteResponse> => {
    const { email, nomeCompleto, password, telefone } = data;
    const clienteRepository = AppDataSource.getRepository(Cliente);

    const findCliente = await clienteRepository.findOne({
        where: {
            email,
        },
    });

    if (findCliente) {
        throw new AppError("Cliente already exists", 409);
    }

    const hashPassword = await hash(password, 10);

    const cliente = clienteRepository.create({
        nomeCompleto,
        email,
        telefone,
        password: hashPassword,
    });

    await clienteRepository.save(cliente);
    cliente.id = cliente.id.toString();
    return clienteSchemaResponse.parse(cliente);
};
