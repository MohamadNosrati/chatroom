import mongoose from "mongoose";
import { IUser } from "./types";

const userSchema = new mongoose.Schema<IUser>(
  {
    email: {
      required: [true, "email field is required"],
      unique: [true, "email filed must be uniqu"],
      type: String,
    },
    userName: {
      required: [true, "userName field is required"],
      type: String,
      minlength: [6, "user name field must be at least 6 characters!"],
      maxlength: [16, "user name field must be max 16 characters!"],
    },
    password: {
      required: [true, "password field is required"],
      type: String,
      minlength: [8, "password field must be at least 8 characters!"],
      select:false
    },
    role: {
      required: [true, "role field is required"],
      default: "user",
      type: String,
      enum: {
        values: ["super-admin", "admin", "editor", "user"],
        message: "role field must be super-admin or admin  or editor or user",
      },
    },
    isActive:{
      type:Boolean,
      default :true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id; // Assign _id value to a new 'id' property
        delete ret._id; // Remove the original _id property
        return ret;
      },
    },
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
