import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import { TClientArray, TclientResponse } from "../../interfaces/user.interface";
import { clientSchemaArray } from "../../schemas/user.schema";

export const listAllClientSevice = async (): Promise<TClientArray> => {
    const clientRepository = AppDataSource.getRepository(User);

    const user: User[] = await clientRepository.find();

    const clientAsStyring = user.map((user) => ({
        ...user,
        id: user.id.toString(),
    }));

    const returnClient = clientSchemaArray.parse(clientAsStyring);
    console.log(returnClient);
    return returnClient;
};
