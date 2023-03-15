import User from "../usersModel.js";
import { encrypt } from "../../helpers/handlePassword.js"
import { createToken } from "../../helpers/sessionToken.js";
import { verifyToken } from "../../helpers/sessionToken.js";
import transporter from "../../helpers/handleMailer.js"

const mailRecoveryPass = async (req, res, next) =>{

    const user = await User.find().where({email: req.body.email});
    if(!user.length){
        return res.status(400).json({message: "Email no encontrado"})
    }else{

        const userForToken = {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email
        };
        const token = await createToken(userForToken, "15m");
        const link = `${process.env.public_url}/api/user/recovery-password/${token}`
        
        const mailDetails = {
            from: "soporte_tecnico@miprimeraapi.com",
            to: userForToken.email,
            subject: "Recuperación de contraseña",
            html: `<h2>Recuperación de contraseña</h2>
            <p>Para cambiar su contraseña haga click en el enlace a continuación y siga las instrucciones</p>
            <a href="${link}">Haga click aquí para cambiar su contraseña</a>`
            
        };
        transporter.sendMail(mailDetails, (error, data)=>{
            if (error){
                return res.status(404).json(error.message)
            }else{
                res.status(200).json({message: `Se ha enviado un mail de recuperación de contraseña para el
                usuario de id: ${userForToken.id} al mail: ${userForToken.email}`})
            }
        })
    }
};

const mailRecoveryPassForm = (req, res, next)=>{
    res.send("Enviamos el formulario donde colocará su email registrado")
};

const resetPasswordForm = async (req, res, next)=>{
    const {token} = req.params;
    const tokenStatus = await verifyToken(token);
    if (tokenStatus instanceof Error){
        console.log(tokenStatus)
    }else{
        res.render("reset", {token, tokenStatus})
    }
};

const resetPassword = async (req, res, next)=>{
    const {token} = req.params;
    const tokenStatus = await verifyToken(token);
    if(tokenStatus instanceof Error) return console.log(tokenStatus);
   const newPass = await encrypt(req.body.password);
   console.log(tokenStatus.user.id)
    try{
        const updatedUser = await User.findByIdAndUpdate(tokenStatus.user.id, {password: newPass});
        res.status(200).json({message: `La contraseña del usuario con id ${tokenStatus.user.id} ha sido actualizada`})
    }catch(error){
        console.log(error)
    }
};

export { mailRecoveryPass, mailRecoveryPassForm, resetPassword, resetPasswordForm}