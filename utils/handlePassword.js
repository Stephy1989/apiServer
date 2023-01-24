import bcrypt from "bcrypt";
const saltRounds = 10;
const encrypt = async(password)=>{
    const encryptedPass = await bcrypt.hash(password, saltRounds)
    return encryptedPass
}
const decrypt = async(password, hashedPassword)=>{
    const decryptedPass = await bcrypt.compare(password, hashedPassword)
    return decryptedPass
}
export { encrypt, decrypt }