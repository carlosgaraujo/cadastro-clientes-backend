import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/listContact.service";
import { updateContactService } from "../services/contact/updateContact.service";
import { json } from "stream/consumers";
import { deleteContactService } from "../services/contact/deleteContact.service";
import { listContactByIdService } from "../services/contact/listContactById.service";

export const CreateContatController = async (req: Request, res: Response) => {
    const id = res.locals.user;
    const newContact = await createContactService(req.body, id);

    return res.status(201).json(newContact);
};

export const listContatController = async (req: Request, res: Response) => {
    const contacts = await listContactService();
    return res.json(contacts);
};
export const updateContatController = async (req: Request, res: Response) => {
    const update = await updateContactService(
        req.body,
        parseInt(req.params.id)
    );
    return res.json(update);
};
export const deleteContatController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await deleteContactService(id);
    return res.status(204).send();
};


export const listContactbyIdController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const contactId = parseInt(req.params.id);
  
    const contact = await listContactByIdService(
      contactId
    );
  
    return res.json(contact);
  };
  