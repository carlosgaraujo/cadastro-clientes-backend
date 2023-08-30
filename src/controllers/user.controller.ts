import { Request, Response } from "express";
import { createUserService } from "../services/user/createUser.service";
import { listAllClientSevice } from "../services/user/listUser.service";
import { deleteClientService } from "../services/user/deleteUser.service";
import { updateClientService } from "../services/user/updateUser.service";
import { TUser, TUserUpdate, TUserUpdate1 } from "../interfaces/user.interface";
import { listUserByIdService } from "../services/user/listUserById.service";

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

export const deleteUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = parseInt(req.params.id);
    await deleteClientService(userId);

    return res.status(204).send();
};

export const updateUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id = parseInt(req.params.id);
    const bodyUser: TUserUpdate1 = req.body;

    const updateUser = await updateClientService(bodyUser, id);

    return res.json(updateUser);
};

export const listUserByIdController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id = parseInt(req.params.id);

    const user = await listUserByIdService(id);

    return res.json(user);
};
