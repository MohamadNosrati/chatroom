import express from "express";
import authentication from "../llb/middlewares/authentication";
import authorization from "../llb/middlewares/authorization";
import { createPermission, deletePermission, getAllPermissions, getPermission, updatePermission } from "./permissionController";

const permissionRouter = express.Router();

permissionRouter.get("/",authentication,authorization,getAllPermissions);
permissionRouter.post("/",authentication,authorization,createPermission);
permissionRouter.get("/:id",authentication,authorization,getPermission);
permissionRouter.delete("/:id",authentication,authorization,deletePermission);
permissionRouter.patch("/:id",authentication,authorization,updatePermission);

export default permissionRouter;