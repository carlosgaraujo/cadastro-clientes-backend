import express, { Application } from "express";

import userRouter from "./routes/user.routes";
import { handleAppError } from "./middlewares/handleErro";

const app: Application = express();

app.use(express.json());
app.use("/users", userRouter);

app.use(handleAppError);
export default app;
