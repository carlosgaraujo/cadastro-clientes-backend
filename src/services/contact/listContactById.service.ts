import { Repository } from "typeorm";
import { TContactResponse } from "../../interfaces/contact.interface";
import Contact from "../../entities/contact.entitie";
import { AppDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contact.schema";
import AppError from "../../errors";

export const listContactByIdService = async (
    id: number
): Promise<TContactResponse | null> => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const contact: Contact | null = await contactRepository.findOne({
        where: {
            id: id,
        },

        relations: {
            user: true,
        },
    });

    if (!contact) {
        throw new AppError("Contact not found", 404);
      }

    return contactSchema.parse(contact);
};
