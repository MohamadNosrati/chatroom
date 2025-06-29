import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "./userController";

const userRouter = express.Router();

userRouter.get("/",getAllUsers);
userRouter.get("/:id",getUser);
userRouter.post("/",createUser);
userRouter.delete("/:id",deleteUser);
userRouter.patch("/:id",updateUser);


export default userRouter;