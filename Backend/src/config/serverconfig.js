import dotenv from 'dotenv';

dotenv.config();

export const db_url = process.env.DB_URL;
export const secret_key = process.env.SECRET_KEY;
export const mail_password = process.env.MAIL_PASSWORD;
export const mail_id = process.env.MAIL_ID;
export const redis_port = process.env.REDIS_PORT;
export const redis_host = process.env.REDIS_HOST;