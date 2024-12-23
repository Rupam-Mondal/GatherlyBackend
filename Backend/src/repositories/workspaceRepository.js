import mongoose from 'mongoose';
import Workspace from "../schema/workspace.js";
import { createChannel } from "./channelRepository.js";
import { finduserByid } from "./userRepository.js";

export async function createWorkspace(workspaceObject){
    try {
        const response = await Workspace.create(workspaceObject);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export async function findworkspaceByid(id){
    try {
        const workspace = await Workspace.findById(id).populate('channels').populate('members.member');
        return workspace;
    } catch (error) {
        console.log("Workspace not found");
        return null;
    }
}

export async function getWorkspaceByname(workspacename){
    try {
        const workspace = Workspace.findOne({ name: workspacename });
        return workspace
    } catch (error) {
        console.log("Workspace not found");
        return null;
    }
}
export async function getWorkspaceByJoincode(joincode) {
    try {
        const workspace = Workspace.findOne({ joincode:joincode });
        return workspace
    } catch (error) {
        console.log("Workspace not found");
        return null;
    }
}

export async function addmemberToWorkspace(workspaceId , userId , role){
    try {
        const workspace = await findworkspaceByid(workspaceId);
        if (!workspace) {
            return null;
        }
        const user = await finduserByid(userId);
        if (!user) {
            return null;
        }
        workspace.members.map((v , i) => {
            if(v.member == userId){
                throw null;
            }
        })
        console.log(userId);
        workspace.members.push({ member:userId, role:role });
        await workspace.save();
        return workspace;
    } catch (error) {
        console.log("Workspace not found");
        return null;
    }
}

export async function addchannelToworkspace(workspaceId , channelName){
    try {
        const workspace = await findworkspaceByid(workspaceId);
        if (!workspace) {
            return null;
        }
        workspace.channels.map((v , i) => {
            if(v.name == channelName){
                throw {
                    message:"Channel already exist"
                }
            }
        })
        const channelObject = {
            name:channelName,
            workspace:workspaceId
        }
        const channelCreate = await createChannel(channelObject);
        workspace.channels.push(channelCreate);
        await workspace.save();
        return workspace;
    } catch (error) {
        console.log("Workspace not found");
        return null;
    }
}

export async function getAllworkspaceForUser(userId){
    try {
        const response = await Workspace.find({
            "members.member": userId
        }).populate('channels');
        console.log(response);
        return response;
    } catch (error) {
        console.log("Something went wronmg");
        return null;
    }
}