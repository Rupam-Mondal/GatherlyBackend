import { addChannelToworkspaceService, addmemberToWorkspaceService, createWorkspaceService, getAllworkspaceService } from "../service/workspaceService.js";

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
export async function addMemberToworkspaceController(req , res){
    try {
        const response = await addmemberToWorkspaceService(req.user.id, req.body.workspaceId, req.body.joincode);
        if(!response){
            throw null;
        }
        return res.json({
            success: true,
            message: "Member added successfully",
            data: response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }
}
export async function addChannelToworkspaceController(req , res){
    try {
        const response = await addChannelToworkspaceService(req.body.workspaceId, req.body.channelName);
        if(!response){
            throw null;
        }
        return res.json({
            success:true,
            message:"Channel added successfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }
}