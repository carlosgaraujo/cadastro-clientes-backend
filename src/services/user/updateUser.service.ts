import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import { TUserUpdate, TUserResponse } from "../../interfaces/user.interface";
import {userSchemaUpdate } from "../../schemas/user.schema";

export const updateClientService = async (
    data: TUserUpdate,
    id: number
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findUser: User | null = await userRepository.findOneBy({
        id: id,
    });

    const userUpdate = userRepository.create({
        ...findUser,
        ...data,
    });

    await userRepository.save(userUpdate);

    const returnUser:any = userSchemaUpdate.parse(userUpdate);
    
    return returnUser;
};
