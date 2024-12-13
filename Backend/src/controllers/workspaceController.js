import { createWorkspaceService } from "../service/workspaceService.js";

export async function createWorkspaceController(req , res){
    try {
        const response = await createWorkspaceService({...req.body , owner:req.user});
        return res.json({
            success:true,
            message:"Workspace created successfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "workspace creation failed"
        })
    }
}