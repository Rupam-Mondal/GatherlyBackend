import bcrypt from 'bcrypt'
import { createUser, getUserByUsername } from "../repositories/userrepository.js";
import { createToken } from '../utils/jwt.js';

export async function signupService(userObject){
    try {
        const response = await createUser(userObject);
        if(!response){
            throw null;
        }
        return response;
    } catch (error) {
        console.log("sign up failed");
        return null;
    }
}

export async function signinService(userObject){
    try {
        const user = await getUserByUsername(userObject.username);
        
        if(!user){
            return null;
        }
        const response = bcrypt.compareSync(userObject.password , user.password);
        if(!response){
            throw {
                message : "Credential mismatch"
            }
        }
        const Token = createToken({email : user.email , username : user.username , id:user._id});
        return {
            email:user.email,
            username:user.username,
            avatar:user.avatar,
            token:Token
        };


    } catch (error) {
        console.log(error);
        return null;
    }
}