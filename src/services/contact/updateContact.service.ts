import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entitie";
import AppError from "../../errors";
import {
    TContactResponse,
    TContactUpdate,
} from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schema";

export const updateContactService = async (
    data: TContactUpdate,
    id: number
): Promise<TContactResponse> => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const oldContact = await contactRepository.findOneBy({
        id: id,
    });

    if (!oldContact) {
        throw new AppError("Contact not Found", 404);
    }

    const newContactData = contactRepository.create({
        ...oldContact,
        ...data,
    });

    await contactRepository.save(newContactData);
    
    return contactSchema.parse(newContactData);
};
