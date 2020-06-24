import { Router } from "express";
import UserController from "./user.controllers";
import { RequestWrapper as wrap } from "../../core/wrapper";

const user: Router = Router();

user.get("/:id", wrap(UserController.getUserInfo));
user.get("/", wrap(UserController.getUser));

user.post("/", wrap(UserController.createUser));

user.put("/", wrap(UserController.updateUser));

user.delete("/", wrap(UserController.deleteUser));

export default user;
