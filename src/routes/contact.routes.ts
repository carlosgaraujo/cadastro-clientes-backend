import { Router } from "express";
import { checkToken } from "../middlewares/checkToken.middleware";
import { checkBody } from "../middlewares/checkBody.middleware";
import {
    contactSchemaRequest,
    contactSchemaUpdate,
} from "../schemas/contact.schema";
import {
    CreateContatController,
    deleteContatController,
    listContactbyIdController,
    listContatController,
    updateContatController,
} from "../controllers/contact.controller";
import { ownerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { checkContact } from "../middlewares/checkContact.middleware";

const contactRouter: Router = Router();

contactRouter.post(
    "",
    checkToken,
    checkBody(contactSchemaRequest),
    CreateContatController
);
contactRouter.get("", checkToken, listContatController);
contactRouter.get("/:id", checkContact, checkToken, listContactbyIdController);

contactRouter.patch(
    "/:id",
    checkToken,
    // ownerMiddleware,
    checkBody(contactSchemaUpdate),
    updateContatController
);
contactRouter.delete("/:id", checkContact, checkToken, deleteContatController);
export default contactRouter;
