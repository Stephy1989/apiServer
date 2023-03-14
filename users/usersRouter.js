import express from "express";
import { loginUser, registerUser, deleteUser, changeUser } from "./usersController.js";
import { validationRulesUser } from "../validator/usersValidator.js";
const usersRouter = express.Router();


usersRouter.post("/login",  loginUser);
usersRouter.post("/", validationRulesUser ,registerUser);
usersRouter.delete("/", deleteUser);
usersRouter.put("/", changeUser)



export default usersRouter
