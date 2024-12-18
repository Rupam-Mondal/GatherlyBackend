import { signinService, signupService } from "../service/userService.js";

export async function SignupController(req , res){
    try {
        const response = await signupService(req.body);
        if(!response){
            throw null;
        }
        return res.json({
            success:true,
            message:"User Created successfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong or user is already exist",
        })
    }
}

export async function signinController(req , res){
    try {
        const response = await signinService(req.body);
        if(!response){
            return res.json({
                success:false,
                message:"Signin failed"
            })
        }

        return res.json({
            success: true,
            message: "Sign in successfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Signin failed"
        })
    }
}