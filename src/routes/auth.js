import { Router } from "express";
import { registerUser } from "../services/user.js";

const authRouter = Router();

authRouter.post("/signup", registerUser);

export default authRouter;
