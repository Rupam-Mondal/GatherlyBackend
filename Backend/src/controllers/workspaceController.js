import { createWorkspaceService, getAllworkspaceService } from "../service/workspaceService.js";

export async function createWorkspaceController(req , res){
    try {
        console.log(req.user);
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
export async function getAllworkspaceController(req , res){
    try {
        const response = await getAllworkspaceService(req.user.id);
        console.log(response);
        return res.json({
            success: true,
            message: "Workspaces fetched successfully",
            data: response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }
}