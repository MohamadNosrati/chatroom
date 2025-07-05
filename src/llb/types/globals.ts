import { Request } from "express";
import { IUser } from "../../users/types";

export interface IAuthenticatedRequest extends Request {
    user?:IUser;
}

export interface IBaseParams {
    limit:number;
    page:number;
    sortBy:string;
    sortOrder:boolean;
    isActive:boolean;
    created_from:Date;
    created_to:Date;
}