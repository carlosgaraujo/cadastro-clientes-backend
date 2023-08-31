import { Router } from "express";
import { checkToken } from "../middlewares/checkToken.middleware";
import checkUser from "../middlewares/checkUser.middleware";
import { listUserByIdController } from "../controllers/user.controller";
import { checkBody } from "../middlewares/checkBody.middleware";
import { userSchemaUpdate } from "../schemas/user.schema";
import { deleteProfileController, updateProfileController } from "../controllers/profile.controllers";




const profileRouter: Router = Router();

profileRouter.get(
  "",
  checkToken,
  checkUser,
  listUserByIdController
);

profileRouter.patch(
  "",
  checkToken,
  checkUser,
  checkBody(userSchemaUpdate),
  updateProfileController
);

profileRouter.delete(
  "",
  checkToken,
  checkUser,
  deleteProfileController
);

export default profileRouter;
