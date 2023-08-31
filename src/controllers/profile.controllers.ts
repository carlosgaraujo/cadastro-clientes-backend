import { Request, Response } from "express";
import { listUserByIdService } from "../services/user/listUserById.service";
import { updateUserService } from "../services/user/updateUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { TUser, TUserRequest, TUserUpdate } from "../interfaces/user.interface";

export const listProfilebyIdController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id: number = res.locals.sub;

    const user: TUser | null = await listUserByIdService(id);

    return res.json(user);
};

export const updateProfileController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id: number = res.locals.sub;
    const userDatarequest: any = req.body;

    const updatedUser: string | TUser = await updateUserService(
        id,
        userDatarequest
    );

    return res.json(updatedUser);
};

export const deleteProfileController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id: number = res.locals.sub;

    await deleteUserService(id);

    return res.status(204).send();
};
