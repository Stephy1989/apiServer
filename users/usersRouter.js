import express from "express";
import { loginUser, registerUser, deleteUser, changeUser } from "./usersController.js";
const usersRouter = express.Router();


usersRouter.post("/login",  loginUser);
usersRouter.post("/", registerUser);
usersRouter.delete("/", deleteUser);
usersRouter.put("/", changeUser)



export default usersRouter
