import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import {
    TClientUpdate,
    TclientResponse,
} from "../../interfaces/user.interface";
import { clientSchemaResponse } from "../../schemas/user.schema";

export const updateClientService = async (
    data: TClientUpdate,
    id: number
): Promise<TclientResponse> => {
    const clientRepository = AppDataSource.getRepository(User);

    const findUser: User | null = await clientRepository.findOneBy({
        id: id,
    });

    const userUpdate = clientRepository.create({
        ...findUser,
        ...data,
    });

    await clientRepository.save(userUpdate);
    userUpdate.id = userUpdate.id.toString();
    return clientSchemaResponse.parse(userUpdate);
};
