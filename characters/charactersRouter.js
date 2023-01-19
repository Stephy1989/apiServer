import express from "express";
import { getCharacters, postCharacter, deleteCharacterById } from "./charactersController.js"
const charactersRouter = express.Router();

charactersRouter.get("/", getCharacters);
charactersRouter.post("/", postCharacter);
charactersRouter.delete("/:id", deleteCharacterById);




export default charactersRouter