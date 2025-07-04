import mongoose from "mongoose";

export interface IRole {
  _id: mongoose.Types.ObjectId;
  title: string;
  permissions:mongoose.Types.ObjectId[];
}
