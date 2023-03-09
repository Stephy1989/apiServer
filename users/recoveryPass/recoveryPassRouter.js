import express from "express";
import { mailRecoveryPass, resetPassword, resetPasswordForm } from "./recoveryPassController.js"

const recoveryPassRouter = express.Router();

recoveryPassRouter.get("/");
recoveryPassRouter.post("/", mailRecoveryPass);
recoveryPassRouter.put("/");

const resetPasswordRouter = express.Router();

resetPasswordRouter.get("/", resetPasswordForm);
resetPasswordRouter.post("/", resetPassword);


export { recoveryPassRouter, resetPasswordRouter }
