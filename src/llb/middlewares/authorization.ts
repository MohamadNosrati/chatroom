import { NextFunction, Request, Response } from "express";
import { IAuthenticatedRequest } from "../types/globals";
import AppError from "../tools/appError";

const authorization = (req:IAuthenticatedRequest,res:Response,next:NextFunction)=>{
    if(req.user?.role !== "super-admin"){
        return next(new AppError(401,"you dont have access to this end point"))
    }
    next();
}

export default authorization;