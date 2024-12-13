import jwt from 'jsonwebtoken'
import { secret_key } from '../config/serverconfig.js';

export function createToken(object){
    return jwt.sign(object , secret_key , {expiresIn:'1d'});
}

export function tokenVerify(Token){
    return jwt.verify(Token , secret_key);
}