import express from "express";
import { postCharacter, deleteCharacterById, changeCharacter } from "./charactersController.js";
import isAuth from "../authorization/isAuth.js";
import uploadImage from "../helpers/handleStorage.js";
import validationRulesCharacter from "../validator/charactersValidator.js";
const characterUserRouter = express.Router();

characterUserRouter.post("/", isAuth, uploadImage.single("image"), validationRulesCharacter, postCharacter);
characterUserRouter.delete("/:id", isAuth, deleteCharacterById);
characterUserRouter.put("/:id", isAuth, changeCharacter);

export default characterUserRouter