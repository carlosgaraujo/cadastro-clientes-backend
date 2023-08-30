import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import Contact from "../../entities/contact.entitie";
import AppError from "../../errors";
import {
    TContactRequest,
    TContactResponse,
} from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schema";
import { Repository } from "typeorm";

export const createContactService = async (
    data: TContactRequest,
    id: number
): Promise<TContactResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const user = await userRepository.findOne({
        where: {
            id: id,
        },
    });

    if (!user) {
        throw new AppError("User Not Found", 404);
    }

    const contact = contactRepository.create({
        ...data,
        user: user,
    });

    await contactRepository.save(contact);

    return contactSchema.parse(contact);
};
