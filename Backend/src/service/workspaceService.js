import {v4 as uuidv4} from 'uuid';
import { addchannelToworkspace, addmemberToWorkspace, createWorkspace, getAllworkspaceForUser } from '../repositories/workspaceRepository.js';

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