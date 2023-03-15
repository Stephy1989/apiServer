import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const key = process.env.tokenKey

const createToken = (user, time) =>{ 
    
    const sign = jwt.sign(
    {user: user},
    key,
    {expiresIn: time})
     return (sign);
}
    
        

const verifyToken = async (token)=>{
    try{
        return jwt.verify(token, key)
    }catch(error){
        return (error)
    }
    
};



export { createToken, verifyToken}