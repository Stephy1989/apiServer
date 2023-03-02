import express from "express";
import { postCharacter, deleteCharacterById, changeCharacter } from "./charactersController.js";
import { verifyToken } from "../helpers/sessionToken.js";
const characterUserRouter = express.Router();

characterUserRouter.post("/", verifyToken, postCharacter);
characterUserRouter.delete("/:id", verifyToken, deleteCharacterById);
characterUserRouter.put("/:id", verifyToken, changeCharacter);

export default characterUserRouter