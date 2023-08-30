import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUserByIdController,
    listUsersControllers,
    updateUserController,
} from "../controllers/user.controller";
import { checkBody } from "../middlewares/checkBody.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";
import { checkToken } from "../middlewares/checkToken.middleware";
import { verifyEmail } from "../middlewares/checkEmail.middlewaew";
import checkUser from "../middlewares/checkUser.middleware";

const userRouter: Router = Router();

userRouter.post(
    "",
    verifyEmail,
    checkBody(userSchemaRequest),
    createUserController
);
userRouter.get("", listUsersControllers);
userRouter.get("/:id", checkUser, checkToken, listUserByIdController);
userRouter.delete("/:id", checkUser, deleteUserController);
userRouter.patch(
    "/:id",
    checkUser,
    checkToken,
    checkBody(userSchemaUpdate),
    updateUserController
);

export default userRouter;
