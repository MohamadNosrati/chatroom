import mongoose from "mongoose";
import { IBaseParams } from "../llb/types/globals";

export interface IUser {
    _id:mongoose.Types.ObjectId;
    email:string;
    userName:string;
    role : string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
    isActive:boolean;
}


export interface IUserParams extends IBaseParams {
    userName:string;
    email:string;
    
}