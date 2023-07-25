import { z } from "zod";
import {
  clienteSchema,
  clienteSchemaRequest,
  clienteSchemaResponse,
} from "../schemas/cliente.schema";

export type Tcliente = z.infer<typeof clienteSchema>;
export type TclienteRequest = z.infer<typeof clienteSchemaRequest>;
export type TclienteResponse = z.infer<typeof clienteSchemaResponse>;
