import { getUserByemail } from "../repositories/userRepository.js";
import { tokenVerify } from "../utils/jwt.js";

export async function isAuthenticate(req , res , next){
    const Token = req.headers['x-access-token'];
    if(!Token){
        return res.json({
            success:true,
            message:"Token is required"
        })
    }
    try {
        const response = tokenVerify(Token);
        const searchuser = await getUserByemail(response.email);
        if(!searchuser){
            return res.json({
                success:false,
                message:"Unauthenticate user"
            })
        }
        req.user = response;
        next();
    } catch (error) {
        res.json({
            success:false,
            message:"Credential mismatch"
        })
    }
}