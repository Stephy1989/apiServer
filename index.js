import "./config/mongo.js"
import express from "express";
import ehbs from "express-handlebars";
import charactersRouter from "./characters/charactersRouter.js";
import characterUserRouter from "./characters/characterUserRouter.js";
import usersRouter from "./users/usersRouter.js";
import path from "path";
import {fileURLToPath} from "url";
import cors from "cors";
import * as dotenv from "dotenv"
import { recoveryPassRouter, resetPasswordRouter } from "./users/recoveryPass/recoveryPassRouter.js"
dotenv.config();




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();
const PORT = process.env.PORT || 3030;


server.use(express.static("public"))
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

const hbs = ehbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    helpers: {
        errBelowInput: function (arrWarnings, inputName){
            if (!arrWarnings) return null;
            const warning = arrWarnings.find((el)=> el.param === inputName)
            if (warning === undefined){
                return null
            }else{
                return `
                <div class="warning-message"> 
                ${warning.msg}
                </div>
                `
            }
        }
    }
})

server.set("views", "./views");
server.engine("handlebars", hbs.engine);
server.set("view engine", "handlebars")

server.use("/api/characters", charactersRouter)
server.use("/api/character/user", characterUserRouter)
server.use("/api/user", usersRouter)
server.use("/api/user/forgot-password", recoveryPassRouter)
server.use("/api/user/recovery-password", resetPasswordRouter)




server.listen(PORT, (err)=>{
    err? console.log(`Server down du to: ${err}`)
    :
    console.log(`Server running on http://localhost:${PORT}`)
});