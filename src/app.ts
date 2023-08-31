import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";

import userRouter from "./routes/user.routes";
import { handleError } from "./errors";
import loginRoutes from "./routes/login.routes";
import contactRouter from "./routes/contact.routes";
import cors from "cors";
import profileRouter from "./routes/profile.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/login", loginRoutes);
app.use("/contact", contactRouter);
app.use("/profile", profileRouter);
app.use(handleError);

export default app;
