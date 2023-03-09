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
    
        

const verifyToken = (req, res, next)=>{
const bearerHeader = req.headers["authorization"]
if (bearerHeader === "undefined"){
    res.status(403).json({message: "Forbidden acces | No token provided"});
}else{
    const bearerToken= bearerHeader.split(" ").pop();
    req.token = bearerToken;
    jwt.verify(req.token, key, (error)=>{
            if (error){
                res.status(400).json({message: "Forbidden acces | Unvalid token"})
            }else{ 
                next();
            }
            
        })
    }
};

export { createToken, verifyToken }