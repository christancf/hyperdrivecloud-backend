import { Router } from "express";
import {
  deleteUser,
  editUser,
  getUserByEmailService,
  getUserByIdService,
} from "../services/user.js";

const userRouter = Router();

userRouter.delete("/:uid", deleteUser);
userRouter.put("/:uid", editUser);
userRouter.get("/email/:email", getUserByEmailService);
userRouter.get("/:uid", getUserByIdService);

export default userRouter;
