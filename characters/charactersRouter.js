import express from "express";
import { getCharacters } from "./charactersController.js"
const charactersRouter = express.Router();

charactersRouter.get("/", getCharacters);





export default charactersRouter