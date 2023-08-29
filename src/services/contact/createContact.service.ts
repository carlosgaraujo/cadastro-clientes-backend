import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import Contact from "../../entities/contact.entitie";
import AppError from "../../errors";
import {
    TContactRequest,
    TContactResponse,
} from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schema";

export const createContactService = async (
    data: TContactRequest,
    contactId: number
): Promise<TContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const clientRepository = AppDataSource.getRepository(User);

    const user = await clientRepository.findOne({
        where: {
            id: contactId,
        },
    });

    if (!user) {
        throw new AppError("User Not Found", 404);
    }

    const contact = contactRepository.create({
        ...data,
        user,
    });

    await contactRepository.save(contact);

    contact.id = contact.id.toString();

    return contactSchema.parse(contact);
};
