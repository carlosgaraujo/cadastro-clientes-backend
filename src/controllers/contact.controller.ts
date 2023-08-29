import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/listContact.service";
import { updateContactService } from "../services/contact/updateContact.service";
import { json } from "stream/consumers";
import { deleteContactService } from "../services/contact/deleteContact.service";

export const CreateContatController = async (req: Request, res: Response) => {
    const id = res.locals.user;
    const newContact = await createContactService(req.body, id);

    return res.status(201).json(newContact);
};

export const listContatController = async (req: Request, res: Response) => {
    const id: string = res.locals.user;

    const contacts = await listContactService(id);
    return res.json(contacts);
};
export const updateContatController = async (req: Request, res: Response) => {
    const update = await updateContactService(req.body, req.params.id);
    return res.json(update);
};
export const deleteContatController = async (req: Request, res: Response) => {
    const id = req.params.id;
    await deleteContactService(id);
    return res.status(204).send();
};
