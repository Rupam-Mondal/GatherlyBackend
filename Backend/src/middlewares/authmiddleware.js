import { tokenVerify } from "../utils/jwt.js";

export function isAuthenticate(req , res , next){
    const Token = req.headers['x-access-token'];
    if(!Token){
        return res.json({
            success:true,
            message:"Token is required"
        })
    }
    try {
        const response = tokenVerify(Token);
        req.user = response
        next();
    } catch (error) {
        res.json({
            success:false,
            message:"Credential mismatch"
        })
    }
}