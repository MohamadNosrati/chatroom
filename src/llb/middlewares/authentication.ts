import { NextFunction, Response } from "express";
import AppError from "../tools/appError";
import jwt from "jsonwebtoken";
import { IAuthenticatedRequest } from "../types/globals";
import UserModel from "../../users/userModel";


interface IValidJwtPayload extends jwt.JwtPayload {
  id:string
}

const authentication = async (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.headers.authorization ||
    typeof req.headers?.authorization !== "string"
  ) {
    return next(new AppError(401,"login please!"))
  }
  const token = req.headers.authorization?.split(" ")[1];
  const payload = await jwt.verify(token, process.env.SECRETTOKEN as string) as string | IValidJwtPayload;
  if(typeof payload === "object"){
      const user = await UserModel.findById(payload?.id) || undefined;
      req.user = user;
  }
  next();
};

export default authentication;
