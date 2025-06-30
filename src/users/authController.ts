import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "./userModel";
import catchAsync from "../llb/tools/catchAsync";
import tokenCreator from "../llb/tools/tokenCreator";
import AppError from "../llb/tools/appError";

export const signUp = catchAsync(async (req: Request, res: Response) => {
  const { email, userName, password } = req.body;
  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.SALTROUNDS)
  );
  const newUser = await UserModel.create({
    email: email,
    userName: userName,
    password: hashedPassword,
    role: "user",
  });
  const token = await tokenCreator(newUser?._id);
  res.status(201).json({
    status: 201,
    message: "user signed up successfully",
    user: newUser,
    token: token,
  });
});

export const signIn = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    const isPasswordCorrect = user && await bcrypt.compare(password, user.password);
    if (!user || !isPasswordCorrect) {
      return next(
        new AppError(400, "there no user with this email or password")
      );
    }
    const token = await tokenCreator(user?._id);
    res.status(200).json({
      status: 201,
      message: "user signed in successfully",
      user: user,
      token: token,
    });
  }
);

export const forgetPassword = (req: Request, res: Response) => {};
