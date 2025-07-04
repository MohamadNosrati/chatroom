import mongoose from "mongoose";
import { IRole } from "./types";

const roleSchema = new mongoose.Schema<IRole>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
    },
    permissions: {
      type: [mongoose.Types.ObjectId],
      required: [true, "title field is required"],
    },
  },
  {
    timestamps: true,
  }
);

const RoleModel = mongoose.model("roles",roleSchema);

export default RoleModel;
