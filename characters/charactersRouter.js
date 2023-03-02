import express from "express";
import { getCharacters, getCharactersByName } from "./charactersController.js"
const charactersRouter = express.Router();

charactersRouter.get("/", getCharacters);
charactersRouter.get("/find/:query", getCharactersByName);






export default charactersRouter