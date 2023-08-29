import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import Contact from "../../entities/contact.entitie";
import AppError from "../../errors";
import {
    TContactArray,
    TContactResponse,
} from "../../interfaces/contact.interface";
import {
    contactSchemaArray,
    contactSchemaResponse,
} from "../../schemas/contact.schema";

export const listContactService = async (
    id: number
): Promise<TContactArray> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const clientRepository = AppDataSource.getRepository(User);

    const user = await clientRepository.findOne({
        where: {
            id: id,
        },
        relations: ["contacts"],
    });

    if (!user) {
        throw new AppError("User Not Found", 404);
    }

    const contacts = await contactRepository.find({
        where: {
            user: { id: user.id.toString() },
        },
    });
    const contactsAsString = contacts.map((contact) => ({
        ...contact,
        id: contact.id.toString(),
    }));

    return contactSchemaArray.parse(contactsAsString);
};
