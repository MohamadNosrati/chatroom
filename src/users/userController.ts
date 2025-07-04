import { Request, Response } from "express";
import catchAsync from "../llb/tools/catchAsync";
import UserModel from "./userModel";

export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  console.log("handler");
  const users = await UserModel.find();
  res.status(200).json({
    staus: 200,
    message: "users list",
    data: {
      users: users,
    },
  });
});

export const getUser = (req: Request, res: Response) => {
  res.status(200).json({
    staus: 200,
    message: "user found successfully!",
    user: {},
  });
};

export const createUser = (req: Request, res: Response) => {
  res.status(200).json({
    staus: 201,
    message: "user created successfully!",
    users: {},
  });
};

export const deleteUser = (req: Request, res: Response) => {
  res.status(200).json({
    staus: 200,
    message: "users deleted successfully!",
  });
};

export const updateUser = (req: Request, res: Response) => {
  console.log("request headers", req.headers);
  res.status(200).json({
    staus: 200,
    message: "users updated succesfully!",
    user: {},
  });
};
