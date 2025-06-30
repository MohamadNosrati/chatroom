import { NextFunction, Request, Response } from "express";

const authorization = (req:Request,res:Response,next:NextFunction)=>{
    next();
}

export default authorization;