import { Router } from "express";
import { createUserController } from "../controllers/cliente.controller";

const userRouter: Router = Router();

userRouter.post("", createUserController);

export default userRouter;
