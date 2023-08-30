import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import Contact from "../entities/contact.entitie";
import AppError from "../errors";

export const checkContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

