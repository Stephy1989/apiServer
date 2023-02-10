import "./config/mongo.js"
import express from "express";
import charactersRouter from "./characters/charactersRouter.js";
import path from "path";
import {fileURLToPath} from "url";
import cors from "cors";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();
const PORT = process.env.PORT || 3030;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "/public")));
server.use(cors());


server.use("/api/characters", charactersRouter)




server.listen(PORT, (err)=>{
    err? console.log(`Server down du to: ${err}`)
    :
    console.log(`Server running on http://localhost:${PORT}`)
});