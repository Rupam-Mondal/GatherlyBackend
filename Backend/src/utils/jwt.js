import jwt from 'jsonwebtoken'
import { secret_key } from '../config/serverconfig.js';

export function createToken(object){
    return jwt.sign(object , secret_key , {expiresIn:'1d'});
}