import { createTransport } from 'nodemailer';
import * as dotenv from "dotenv";
dotenv.config()


export default function (req, res) {
    console.log("Got req")
    const transporter = createTransport({
        port: 465,
        host: process.env.email_host,
        auth: {
            user: process.env.tech_email,
            pass: process.env.password,
        },
        secure: true,
    })
    console.log("Got transporter")
    const mailData = {
        from: process.env.tech_email,
        to: process.env.tech_email,
        subject: `Wiadomość od ${req.body.name}`,
        text: req.body.message + " | Adres email do kontaktu: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Adres email do kontaktu:
      ${req.body.email}</p>`
    }
    console.log("Got mail data")
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            {console.log(err)}
        else
            {console.log(info)}
    })
    res.status(200)
    res.end()
}