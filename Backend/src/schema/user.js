import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true , "Email required"],
        unique:true,
        validate: {
            validator: function (emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: 'Invalid email format'
        }
    },
    username:{
        type:String,
        minlength:3,
        unique:true
    },
    password:{
        type:String,
        required:[true , "password is required"]
    },
    avatar:{
        type:String
    }
} , {timestamps:true});

userSchema.pre('save' , function (next){
    const user = this;
    user.avatar = `https://robohash.org/${user.username}`;

    const salt = bcrypt.genSaltSync(9);
    const hashedPassword = bcrypt.hashSync(user.password , salt);
    user.password = hashedPassword;
    next();
})

const User = mongoose.model("User" , userSchema);

export default User;