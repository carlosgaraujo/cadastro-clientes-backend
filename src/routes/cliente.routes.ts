import { Router } from "express";
import { createUserController } from "../controllers/cliente.controller";
import { checkBody } from "../middlewares/checkBody.middleware";
import { clienteSchemaRequest } from "../schemas/cliente.schema";

const userRouter: Router = Router();

userRouter.post("", checkBody(clienteSchemaRequest), createUserController);

export default userRouter;
