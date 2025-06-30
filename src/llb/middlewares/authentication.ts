import { json, NextFunction, Request, Response } from "express";
import AppError from "../tools/appError";
import jwt from "jsonwebtoken";

const authentication = async (
  req: Request,
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
  const decodedToken = await jwt.verify(token, process.env.SECRETTOKEN as string,(err,payload)=>{
    console.log(err)
    console.log(payload)
  });
  next();
};

export default authentication;
