import "./config/mongo.js"
import express from "express";
import charactersRouter from "./characters/charactersRouter.js"
const server = express();
const PORT = 3030;

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/characters", charactersRouter);



server.listen(PORT, (err)=>{
    err? console.log(`Server down du to: ${err}`)
    :
    console.log(`Server running on http://localhost:${PORT}`)
});