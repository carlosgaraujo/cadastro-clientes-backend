import { z } from "zod";

export const clienteSchema = z.object({
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

export const clienteSchemaRequest = clienteSchema.omit({
    id: true,
    dataRegistro: true,
});

export const clienteSchemaResponse = clienteSchema.omit({
    password: true,
});
