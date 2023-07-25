import { Request, Response } from "express";
import { createUserService } from "../services/createCliente.service";

export const createUserController = async (req: Request, res: Response) => {
    const newCliente = await createUserService(req.body);

    return res.status(201).json(newCliente);
};
