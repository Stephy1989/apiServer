import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const key = process.env.tokenKey

const createToken = (req, time) =>{ 
    
    const sign = jwt.sign(
    {user: req.usr},
    key,
    {expiresIn: time})
     return(sign);
}
    
        

const verifyToken = async (token)=>{
    try{
        return jwt.verify(token, key)
    }catch(error){
        return (error)
    }
    
};



export { createToken, verifyToken}