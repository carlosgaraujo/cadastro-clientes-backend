import { Request, Response } from "express";
import { createUserService } from "../services/user/createUser.service";
import { listAllClientSevice } from "../services/user/listUser.service";
import { deleteClientService } from "../services/user/deleteUser.service";
import { updateClientService } from "../services/user/updateUser.service";
import { TClientUpdate } from "../interfaces/user.interface";

export const createUserController = async (req: Request, res: Response) => {
    const newClient = await createUserService(req.body);

    return res.status(201).json(newClient);
};

export const listUsersControllers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = await listAllClientSevice();
    return res.status(200).json(user);
};

export const deleteClientController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = req.params.id;
    await deleteClientService(userId);

    return res.status(204).send();
};

export const updateClientController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const bodyUser: TClientUpdate = req.body;
    const id = String(req.params.id);

    const updateUser = await updateClientService(bodyUser, id);

    return res.json(updateUser);
};
