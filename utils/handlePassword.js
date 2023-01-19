import bcrypt from "bcrypt";
const saltRounds = 10;
const hashedPassword = async(password)=>{
    return await bcrypt.hash(password, saltRounds)
}