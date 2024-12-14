import nodemailer from 'nodemailer';
import { mail_id, mail_password } from './serverconfig.js';

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: mail_id,
        pass: mail_password,
    },
});

export default transporter;