import mongoose from "mongoose";

export interface IPermission {
  _id: mongoose.Types.ObjectId;
  title: string;
  roles:mongoose.Types.ObjectId[];
}
