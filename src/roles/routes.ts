import express from "express";
import { createRole, deleteRole, getAllRoles, getRole, updateRole } from "./roleController";
import authentication from "../llb/middlewares/authentication";
import authorization from "../llb/middlewares/authorization";

const roleRouter = express.Router();

roleRouter.get("/",authentication,authorization,getAllRoles);
roleRouter.post("/",authentication,authorization,createRole);
roleRouter.get("/:id",authentication,authorization,getRole);
roleRouter.delete("/:id",authentication,authorization,deleteRole);
roleRouter.patch("/:id",authentication,authorization,updateRole);

export default roleRouter;