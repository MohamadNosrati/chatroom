import mongoose from "mongoose";
import { IPermission } from "./types";

const permissionSchema = new mongoose.Schema<IPermission>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
    },
    roles: {
      type: [mongoose.Types.ObjectId],
      required: [true, "roles field is required"],
    },
  },
  {
    timestamps: true,
  }
);

const PermissionModel = mongoose.model("permissions",permissionSchema);

export default PermissionModel;
