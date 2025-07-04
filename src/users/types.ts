import mongoose from "mongoose";

export interface IUser {
    _id:mongoose.Types.ObjectId;
    email:string;
    userName:string;
    role : string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
}