import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/user.interface";
import User from "../../entities/user.entitie";
import { userSchemaResponse } from "../../schemas/user.schema";
import AppError from "../../errors";



export const listUserByIdService = async (
    id: number
): Promise<TUserResponse | null> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
            id: id,
        },

        relations: {
            contacts: true,
        },
    });

    if (!user) {
        throw new AppError("Contact not found", 404);
      }

    const returnUser: TUserResponse = userSchemaResponse.parse(user);

    return returnUser;
};
