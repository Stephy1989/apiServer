import User from "../usersModel.js";
import { encrypt, decrypt } from "../../helpers/handlePassword.js"
import { createToken } from "../../helpers/sessionToken.js";
import transporter from "../../helpers/handleMailer.js"

const mailRecoveryPass = async (req, res, next) =>{

    const user = await User.find().where({email: req.body.email});
    if(!user.length){
        return res.status(400).json({message: "Email no encontrado"})
    };

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

const resetPasswordForm = (req, res, next)=>{
    res.send("Enviamos el formulario")
}

const resetPassword = (req, res, next)=>{
    res
}

export { mailRecoveryPass, resetPassword, resetPasswordForm}