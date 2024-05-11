import { Router } from "express";
import { registerUser, resetPasswordService } from "../services/user.js";

const authRouter = Router();

authRouter.post("/signup", registerUser);
authRouter.get("/reset-password/:email", resetPasswordService);
export default authRouter;
