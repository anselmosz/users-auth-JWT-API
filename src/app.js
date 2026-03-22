import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import usersRoutes from "./modules/users/users.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

app.use(errorHandler);

export default app;