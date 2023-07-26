import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";

import userRouter from "./routes/cliente.routes";
import { handleError } from "./error";
import loginRoutes from "./routes/login.routes";

const app: Application = express();

app.use(express.json());
app.use("/login", loginRoutes);
app.use("/users", userRouter);

app.use(handleError);
export default app;
