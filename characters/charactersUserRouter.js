import express from "express";
import { postCharacter, deleteCharacterById } from "./charactersController.js"
const charactersUserRouter = express.Router();

charactersUserRouter.post("/", postCharacter);
charactersUserRouter.delete("/:id", deleteCharacterById);

export default charactersUserRouter