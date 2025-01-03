import { addChannelToworkspaceService, addmemberToWorkspaceService, createWorkspaceService, getAllworkspaceService, getWorkspaceByIdService, isUserPartOfWorkspaceService } from "../service/workspaceService.js";

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
export async function getAllworkspaceController(req , res){
    try {
        const response = await getAllworkspaceService(req.user.id);
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
        const response = await addmemberToWorkspaceService(req.user.id, req.body.joincode , req.user.email);
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
export async function isUserPartOfWorkspace(req , res){
    try {
        const response = await isUserPartOfWorkspaceService(req.user.id , req.body.workspaceId);
        if(response == true){
            return res.json({
                success:true,
                message:"User is present in the workspace"
            })
        }
        else{
            return res.json({
                success: false,
                message: "User is not present in the workspace"
            })
        }
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export async function getWorkspaceByIdController(req , res){
    try {
        const response = await getWorkspaceByIdService(req.query.workspaceId);
        if (!response) {
            throw null;
        }
        return res.json({
            success: true,
            message: "workspace fecthed successfully",
            data: response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }
}