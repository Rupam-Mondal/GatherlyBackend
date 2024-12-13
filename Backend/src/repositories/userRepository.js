import User from "../schema/user.js";


export async function finduserByid(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log("user not found");
        return null;
    }
}
export async function createUser(userObject){
    try {
        const response = await User.create(userObject);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}
export async function getUserByemail(email){
    try {
        const user = await User.findOne({email});
        return user;
    } catch (error) {
        console.log("User find error in repository layer");
        return null;
    }
}

export async function getAllUser(){
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.log('Something went wrong');
        return null;
    }
}

export async function getUserByUsername(username){
    try {
        const user = await User.findOne({username});
        return user;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}

export async function update(id , object){
    try {
        const user = await User.findByIdAndUpdate(id, object, { new: true });
        return user;
    }
    catch (e) {
        console.log(e)
        throw e;
    }
}

export async function deleteuser(id){
    try {
        const user = await User.findByIdAndDelete(id);
        return user;
    }
    catch (e) {
        console.log(e)
        throw e;
    }
}