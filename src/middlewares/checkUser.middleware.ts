import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import User from "../entities/user.entitie";
import AppError from "../errors";

function getUserId(req: Request): number {
    const id = parseInt(req.params.id);
    return id;
}

async function getUserById(userRepository: Repository<User>, id: number): Promise<User | null> {
    return userRepository.findOne({
      where: { id },
    });
  }
  
  async function handleUserNotFound() {
    throw new AppError("User not found", 404);
  }



  export const checkUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const id = getUserId(req);
  
    const user: User | null = await getUserById(userRepository, id);
  
    if (!user) {
      await handleUserNotFound();
    }
  
    res.locals.user = user;
    return next();
  };

export default checkUser;
