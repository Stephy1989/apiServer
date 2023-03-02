import User from "./usersModel.js";
import { encrypt, decrypt } from "../helpers/handlePassword.js";
import { createToken } from "../helpers/sessionToken.js"


async function loginUser (req, res, next){
    const {email, password} = req.body;
    const user = await User.find().where({email});   
    
    if (user.length){
        const match = await decrypt(password, user[0].password)
        if (match){
            const usr = {
                name: user[0].name,
                lastName: user[0].lastName,
                email: user[0].email
            }
            const accesToken = createToken(usr);
            res.status(200).json({token: accesToken, userData: usr})
            
            
        }else return res.status(404).json({message: "Email o contraseña incorrectos"})
        
    }else return res.status(400).json({message: "Email o contraseña incorrectos"})
    
    
};

async function registerUser (req, res, next){
    const {name, lastName, email, password} = req.body
    const hashedPass = await encrypt(password);
    const user =  await User.find().where({email});
    if (user.length === 0){
        
        const newUser = new User({
            name: name, lastName: lastName, email: email, password: hashedPass
        })
        newUser.save((err)=>{ //Carga el nuevo usuario en la base de datos
            if (!err){
               
                const messageRegister = "Su usuario ha sido creado satisfactoriamente, ya puedes iniciar sesión"
                res.status(200).json({messageRegister})
            }else {
                res.status(404).json(err.message)
            }
        })
    
}else{
        const messageRegister = "Ya existe un usuario registrado con esa dirección de email, verifique e intente nuevamente"
        res.status(400).json({messageRegister})
    }
};

async function changeUser(req, res){
    try{
     const user = await User.findByIdAndUpdate(req.session.user.id, {name: req.body.name, 
        lastName: req.body.lastName, email:req.body.email})
        const usr = req.session.user;
    
        res.status(200).json({usr, message: "Los cambios han sido registrados correctamente"})
    }catch (err){
        const usr = req.session.user;
       res.status(404).json({usr, message: "Ocurrió un error, vuelva a intentarlo"})
    }
};

async function deleteUser(req, res){
    try{
        await User.findByIdAndDelete(req.session.user.id)
        req.session.destroy()
        res.status(200).json({message: "El usuario ha sido eliminado"})
    }catch (error){
        res.status(404).json({message: "Ocurrió un error, vuelva a intentarlo"})
    }
};

export { registerUser, loginUser, changeUser, deleteUser}