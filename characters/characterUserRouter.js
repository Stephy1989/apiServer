import express from "express";
import { postCharacter, deleteCharacterById, changeCharacter } from "./charactersController.js";
import { verifyToken } from "../helpers/sessionToken.js";
import uploadImage from "../helpers/handleStorage.js";
import validationRulesCharacter from "../validator/charactersValidator.js";
const characterUserRouter = express.Router();

characterUserRouter.post("/", verifyToken, uploadImage.single("image"), validationRulesCharacter, postCharacter);
characterUserRouter.delete("/:id", verifyToken, deleteCharacterById);
characterUserRouter.put("/:id", verifyToken, changeCharacter);

export default characterUserRouter