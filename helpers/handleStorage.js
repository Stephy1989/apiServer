import multer from "multer";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import {fileURLToPath} from "url";


const storage =  multer.diskStorage({
    destination: (req, file, callback)=>{
        const pathStorage = `${__dirname}/../public/storage`
        callback(null, pathStorage)
    },
    filename: (req, file, callback)=>{
        const ext = file.originalname.split(".").pop();
        const filename = `charPic_${Date.now()}.${ext}`;
        callback(null, filename);
    }
});

const uploadImage = multer({storage})

export default uploadImage