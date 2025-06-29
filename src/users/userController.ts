import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).json({
    staus: 200,
    message: "users list",
    users: [],
  });
};

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
  res.status(200).json({
    staus: 200,
    message: "users updated succesfully!",
    user: {},
  });
};
