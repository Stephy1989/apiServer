import express from "express";
import { getLoginForm, sendLoginForm, getRegisterForm, sendRegisterForm } from "./usersController.js";

const usersRouter = express.Router();

usersRouter.get("/", getLoginForm);
usersRouter.post("/", sendLoginForm);

const registerRouter = express.Router();

registerRouter.get("/", getRegisterForm);
registerRouter.post("/", sendRegisterForm);

export { usersRouter, registerRouter }