import { Request } from "express";
import { IUser } from "../../users/types";

export interface IAuthenticatedRequest extends Request {
    user?:IUser;
}