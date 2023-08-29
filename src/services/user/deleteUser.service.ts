import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";

export const deleteClientService = async (id: number): Promise<void> => {
    const ClientRepository = AppDataSource.getRepository(User);

    const delUser = await ClientRepository.findOneBy({ id: id });

    await ClientRepository.remove(delUser!);
};
