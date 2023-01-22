import express from "express";
const usersRouter = express.Router();

usersRouter.get("/", (req, res)=>{
    res.render("users")
} )

export default usersRouter