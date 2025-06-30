import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "./userController";
import { signIn, signUp } from "./authController";
import authentication from "../llb/middlewares/authentication";
import authorization from "../llb/middlewares/authorization";

const userRouter = express.Router();


userRouter.post("/auth/signup",signUp);
userRouter.post("/auth/signin",signIn);

userRouter.get("/",authentication,authorization,getAllUsers);
userRouter.get("/:id",getUser);
userRouter.post("/",createUser);
userRouter.delete("/:id",deleteUser);
userRouter.patch("/:id",updateUser);


export default userRouter;