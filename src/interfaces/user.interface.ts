import { z } from "zod";
import {
    userSchema,
    userSchemaArray,
    userSchemaRequest,
    userSchemaResponse,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema>;
export type TUserRequest = z.infer<typeof userSchemaRequest>;
export type TUserResponse = z.infer<typeof userSchemaResponse>;
export type TUserUpdate = DeepPartial<TUserRequest>;
export type TUserUpdate1 = z.infer<typeof userSchemaRequest>;
export type TUserArray = z.infer<typeof userSchemaArray>;
