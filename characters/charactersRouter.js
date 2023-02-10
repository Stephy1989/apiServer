import express from "express";
import { getCharacters, postCharacter, deleteCharacterById, changeCharacter } from "./charactersController.js"
const charactersRouter = express.Router();

charactersRouter.get("/", getCharacters);
charactersRouter.post("/", postCharacter);
charactersRouter.delete("/:id", deleteCharacterById);
charactersRouter.patch("/:id", changeCharacter)




export default charactersRouter