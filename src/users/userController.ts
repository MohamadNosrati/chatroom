import { Request, Response } from "express";
import catchAsync from "../llb/tools/catchAsync";
import UserModel from "./userModel";
import ApiFeatures from "../llb/tools/apiFeatures";

export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  if(req.query.isActive){
    console.log("truuuuuuuuuu")
  }
  const query = new ApiFeatures(UserModel.find(),req.query).filtering().pagination().sorting();
  const users = await query.query;
  res.status(200).json({
    staus: 200,
    message: "users list",
    data: {
      users: users,
    },
  });
});

export const getUser = (req: Request, res: Response) => {
  const user = UserModel.findById(req.params.id)
  res.status(200).json({
    staus: 200,
    message: "user found successfully!",
    data: {
      user:user
    },
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
