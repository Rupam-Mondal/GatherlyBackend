import { signupService } from "../service/userService.js";

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
            success: true,
            message: "Something went wrong or user is already exist",
        })
    }
}