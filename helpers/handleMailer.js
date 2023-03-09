import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    host: process.env.mail_host,
    port: 2525,
    auth:{
        user: process.env.mail_user,
        pass: process.env.mail_pass
    }

})
export default transporter