import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Contact from "../entities/contact.entitie";

export const ownerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contactId = req.params.id;
    const clientId = res.locals.user;

    const contacts = await contactRepository.findOne({
        where: {
            id: clientId,
        },
        relations: {
            user: true,
        },
    });

    if (!contacts) {
        res.status(404).json({
            message: "Contact Not Found",
        });
    }

    if (contacts?.user.id != clientId) {
        res.status(403).json({
            message: "You dont't have permissions",
        });
    }

    return next();
};
