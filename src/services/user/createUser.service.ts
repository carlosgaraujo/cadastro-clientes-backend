import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import { TUserRequest, TUser } from "../../interfaces/user.interface";
import { userSchema } from "../../schemas/user.schema";
import { Repository } from "typeorm";

export const createUserService = async (data: TUserRequest): Promise<TUser> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User = userRepository.create(data);

    await userRepository.save(user);

    const returnUser = userSchema.parse(user);

    return returnUser;
};
