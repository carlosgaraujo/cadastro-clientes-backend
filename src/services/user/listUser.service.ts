import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import { TUserArray, TUserResponse } from "../../interfaces/user.interface";
import { userSchemaArray } from "../../schemas/user.schema";

export const listAllClientSevice = async (): Promise<TUserResponse | null> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User[] | null = await userRepository.find({
        relations: {
            contacts: true,
        },
    });

    const returnUserArray: any = userSchemaArray.parse(user);

    return returnUserArray;
};
