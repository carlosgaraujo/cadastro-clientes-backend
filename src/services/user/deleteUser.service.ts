import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";

export const deleteClientService = async (id: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const delUser: User | null = await userRepository.findOneBy({ id: id });

    await userRepository.remove(delUser!);
};
