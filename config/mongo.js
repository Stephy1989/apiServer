//MongoDB Atlas Cloud connection
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const db_uri = process.env.db_uri;

mongoose.set("strictQuery", false)
mongoose.connect(db_uri, (err)=>{
    err? console.log(`No se pudo conectar a MongoDB. Error: ${err}`)
    :
    console.log(`Conectado a MongoDB`);
})
