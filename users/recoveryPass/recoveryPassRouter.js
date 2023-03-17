import express from "express";
import { mailRecoveryPass, mailRecoveryPassForm, resetPassword, resetPasswordForm } from "./recoveryPassController.js";
import { validationRulesPassword } from "../../validator/usersValidator.js";

const recoveryPassRouter = express.Router();

recoveryPassRouter.get("/", mailRecoveryPassForm);
recoveryPassRouter.post("/", mailRecoveryPass);


const resetPasswordRouter = express.Router();

resetPasswordRouter.get("/:token", resetPasswordForm);
resetPasswordRouter.post("/:token", validationRulesPassword, resetPassword);


export { recoveryPassRouter, resetPasswordRouter }
