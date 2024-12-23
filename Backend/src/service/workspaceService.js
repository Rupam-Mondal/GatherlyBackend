import {v4 as uuidv4} from 'uuid';
import { addchannelToworkspace, addmemberToWorkspace, createWorkspace, findworkspaceByid, getAllworkspaceForUser } from '../repositories/workspaceRepository.js';
import { finduserByid } from '../repositories/userRepository.js';
import { addEmailToQueue } from '../producers/mailQueueProducer.js';
import { mail_id } from '../config/serverconfig.js';

export async function createWorkspaceService(workspaceObject){
    try {
        const joincode = uuidv4().substring(0 , 6);
        workspaceObject.joincode = joincode;
        console.log(workspaceObject);
        const response = await createWorkspace(workspaceObject);
        const addowner = await addmemberToWorkspace(response._id , workspaceObject.owner.id , 'admin');
        const updatedworkspace = await addchannelToworkspace(response._id , 'General');
        return updatedworkspace;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function getAllworkspaceService(userId){
    try {
        const response = await getAllworkspaceForUser(userId);
        console.log(response);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function addmemberToWorkspaceService(userId , workspaceId, joincode , email){
    try {
        const workspace = await findworkspaceByid(workspaceId);
        if (!workspace) {
            return null;
        }
        if(workspace.joincode == joincode){
            const response = await addmemberToWorkspace(workspaceId, userId, 'member');
            if(!response){
                throw {
                    message:"Some issue"
                }
            }
            addEmailToQueue({ 
                from: mail_id , to: email , 
                subject:'You have been added to a workspace' , 
                text:`Welcome to ${workspace.name}`
            });
            return response
        }
        return null;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export async function addChannelToworkspaceService(workspaceId , channelName){
    try {
        const response = await addchannelToworkspace(workspaceId, channelName);
        if(!response){
            throw null;
        }
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function isUserPartOfWorkspaceService(userId , workspaceId){
    try {
        const workspace = await findworkspaceByid(workspaceId);
        for(let i = 0 ; i < workspace.members.length ; i++){
            if(workspace.members[i].member == userId){
                return true;
            }
        }
        return false;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export async function getWorkspaceByIdService(workspaceId){
    try {
        const response = await findworkspaceByid(workspaceId);
        console.log(response)
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}