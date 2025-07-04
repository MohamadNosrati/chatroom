import { NextFunction, Response } from "express";
import RoleModel from "./permissionModel";
import { IAuthenticatedRequest } from "../llb/types/globals";
import AppError from "../llb/tools/appError";
import PermissionModel from "./permissionModel";

export const getAllPermissions = async (
  req: IAuthenticatedRequest,
  res: Response
) => {
  const permissions = await PermissionModel.find();
  res.status(200).json({
    status: 200,
    message: "permissions list",
    data: permissions,
  });
};

export const getPermission = async (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const permission = await PermissionModel.findById(req.params.id);
  if (!permission) {
    return next(new AppError(400, "there is no permission with this id"));
  }
  res.status(200).json({
    status: 200,
    message: "permissions fournd successfully!",
    data: permission,
  });
};

export const createPermission = async (req: IAuthenticatedRequest, res: Response) => {
  const newPermission = await PermissionModel.create(req.body);
  res.status(200).json({
    status: 200,
    message: "permission created succesfully!",
    data: newPermission,
  });
};

export const deletePermission = async (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const permission = await PermissionModel.findById(req.params.id);
  if (!permission) {
    return next(new AppError(400, "there is no permission with this id"));
  }
  await PermissionModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: 200,
    message: "permissions deleted succesfully!",
  });
};

export const updatePermission = async (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const permission = await PermissionModel.findById(req.params.id);
  if (!permission) {
    return next(new AppError(400, "there is no permission with this id"));
  }
  const updatedPermission = await PermissionModel.findByIdAndUpdate(req.params.id, Object.assign(permission,req.body));
  res.status(200).json({
    status: 200,
    message: "permission updated",
    data: updatedPermission,
  });
};
