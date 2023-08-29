import { z } from "zod";

export const clientSchema = z.object({
    id: z.string(),
    nomeCompleto: z.string(),
    email: z.string().email(),
    telefone: z.string(),
    password: z
        .string()
        .min(4, "Must be at least 4 characters in length")
        .max(120),
    dataRegistro: z.string(),
});

export const clientSchemaRequest = clientSchema.omit({
    id: true,
    dataRegistro: true,
});

export const clientSchemaResponse = clientSchema.omit({
    password: true,
});
export const clientSchemaUpdate = clientSchemaResponse.partial()
export const clientSchemaArray = clientSchemaResponse.array()