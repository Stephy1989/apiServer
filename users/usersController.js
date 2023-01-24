import User from "./usersModel.js";
import { encrypt, decrypt } from "../utils/handlePassword.js"

function getLoginForm(req, res){
    res.render("userLoginForm")
};

function sendLoginForm(req, res){
    res.send("Aqui se envía el formulario de inicio de sesion")
};

function getRegisterForm(req, res){
    res.render("userRegisterForm")
};

async function sendRegisterForm(req, res){
    const {firstName, lastName, email, userName, password}= req.body;
    const hashedPass = await encrypt(password)
    const user = await User.find().where({email})
    if (user.length=== 0){

        const newUser = new User({
            firstName, lastName, email, password: hashedPass
        })
        newUser.save((error)=>{
                if (error){
                    res.status(400).json({message: error.message})
                }else{
                    res.status(200).json(newUser)
                }
            })
        }else {}
};

export { getLoginForm, sendLoginForm, getRegisterForm, sendRegisterForm }