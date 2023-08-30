import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entitie";
import AppError from "../../errors";

export const deleteContactService = async (id: number): Promise<void> => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const contact: Contact | null = await contactRepository.findOneBy({
        id: id,
    });

    await contactRepository.remove(contact!);
};

/*
  const contact = await contactRepository.findOne({
        relations: {
          user: true,
        },
        where: {
          id: id,
        },
      });

      if (contact?.user.id !== userId) {
        throw new AppError("Contact not found", 403);
      }
    
      await contactRepository.remove(contact!);
*/
