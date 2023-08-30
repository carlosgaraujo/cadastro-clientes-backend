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
import { Repository } from "typeorm";

export const listContactService = async (): Promise<TContactResponse> => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const contacts: Contact[] | null = await contactRepository.find({
        relations: {
            user: true,
        },
    });

    const returnContacts:any = contactSchemaArray.parse(contacts);
    return returnContacts;
};
