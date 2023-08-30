import { z } from "zod";
import { contactSchema } from "./contact.schema";

export const userSchema = z.object({
    id: z.number(),
    nomeCompleto: z.string(),
    email: z.string().email(),
    telefone: z.string(),
    password: z
        .string()
        .min(4, "Must be at least 4 characters in length")
        .max(120),
    dataRegistro: z.string(),
});

export const userSchemaRequest = userSchema
    .omit({
        id: true,
        dataRegistro: true,
    })
    .extend({
        password: z.string().max(120),
    });

export const userSchemaResponse = userSchema.extend({
    contacts: z.optional(contactSchema).array(),
});

export const userSchemaArray = userSchemaResponse.array();

export const userSchemaUpdate = userSchema
    .omit({
        password: true,
    })
    .partial();
