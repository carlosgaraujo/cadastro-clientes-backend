import { z } from "zod";
import {
    clientSchema,
    clientSchemaArray,
    clientSchemaRequest,
    clientSchemaResponse,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

export type Tclient = z.infer<typeof clientSchema>;
export type TclientRequest = z.infer<typeof clientSchemaRequest>;
export type TclientResponse = z.infer<typeof clientSchemaResponse>;
export type TClientUpdate = DeepPartial<TclientRequest>;
export type TClientArray = z.infer<typeof clientSchemaArray>;
