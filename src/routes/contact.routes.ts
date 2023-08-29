import { Router } from "express";
import { checkToken } from "../middlewares/ensureAuth.middleware";
import { checkBody } from "../middlewares/checkBody.middleware";
import {
    contactSchemaRequest,
    contactSchemaUpdate,
} from "../schemas/contact.schema";
import {
    CreateContatController,
    deleteContatController,
    listContatController,
    updateContatController,
} from "../controllers/contact.controller";
import { ownerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactRouter: Router = Router();

contactRouter.post(
    "",
    checkToken,
    checkBody(contactSchemaRequest),
    CreateContatController
);
contactRouter.get("", checkToken, listContatController);
contactRouter.patch(
    "/:id",
    checkToken,
    // ownerMiddleware,
    checkBody(contactSchemaUpdate),
    updateContatController
);
contactRouter.delete(
    "/:id",
    checkToken,
    // ownerMiddleware,
    deleteContatController
);
export default contactRouter;
