import { NextFunction, Response } from "express";
import RoleModel from "./roleModel";
import { IAuthenticatedRequest } from "../llb/types/globals";
import AppError from "../llb/tools/appError";

export const getAllRoles = async (
  req: IAuthenticatedRequest,
  res: Response
) => {
  const roles = await RoleModel.find();
  res.status(200).json({
    status: 200,
    message: "roles list",
    data: roles,
  });
};

export const getRole = async (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const role = await RoleModel.findById(req.params.id);
  if (!role) {
    return next(new AppError(400, "there is no role with this id"));
  }
  res.status(200).json({
    status: 200,
    message: "roles fournd successfully!",
    data: role,
  });
};

export const createRole = async (req: IAuthenticatedRequest, res: Response) => {
  const newRole = await RoleModel.create(req.body);
  res.status(200).json({
    status: 200,
    message: "roles created succesfully!",
    data: newRole,
  });
};

export const deleteRole = async (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const role = await RoleModel.findById(req.params.id);
  if (!role) {
    return next(new AppError(400, "there is no role with this id"));
  }
  await RoleModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: 200,
    message: "roles deleted succesfully!",
  });
};

export const updateRole = async (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const role = await RoleModel.findById(req.params.id);
  if (!role) {
    return next(new AppError(400, "there is no role with this id"));
  }
  const updatedRole = await RoleModel.findByIdAndUpdate(req.params.id, Object.assign(role,req.body));
  res.status(200).json({
    status: 200,
    message: "role updated",
    data: updatedRole,
  });
};
