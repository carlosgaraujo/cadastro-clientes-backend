import { Router } from "express";
import {
    createUserController,
    deleteClientController,
    listUsersControllers,
    updateClientController,
} from "../controllers/user.controller";
import { checkBody } from "../middlewares/checkBody.middleware";
import {
    clientSchemaRequest,
    clientSchemaUpdate,
} from "../schemas/user.schema";
import { checkToken } from "../middlewares/ensureAuth.middleware";

const userRouter: Router = Router();

userRouter.post("", checkBody(clientSchemaRequest), createUserController);
userRouter.get("", listUsersControllers);
userRouter.delete("/:id", deleteClientController);
userRouter.patch(
    "/:id",
    checkToken,
    checkBody(clientSchemaUpdate),
    updateClientController
);

export default userRouter;
