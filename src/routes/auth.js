import { Router } from "express";
import { registerUser } from "../services/user.js";

const authRouter = Router();

authRouter.use("/signup", registerUser);

export default authRouter;
