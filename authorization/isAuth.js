import { verifyToken } from "../helpers/sessionToken.js";

const isAuth = async (req, res, next)=>{
   
    if (!req.headers.authorization){
        res.status(403).json({message: "Forbidden acces | No token provided"});
    }else{
        const token = req.headers.authorization.split(" ").pop();
        const verifiedToken = await verifyToken(token)
        if(verifiedToken instanceof Error){
            res.status(401).json("Invalid token")
        }else{next()}
    }
};
export default isAuth
