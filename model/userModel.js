import mongoose,{ Schema } from "mongoose";

const userSchema = new mongoose.Schema({
        firstname:{
            type:String,
            required:[true, "First name is required"],
        },
        lastname:{
            type:String,
            required:[true, "Last name is required"],
        },
        profilephoto:{
            type:String,
        },
        email:{
            type:String,
            required:[true, "Email is required"],
        },
        password:{
            type:String,
            required:[true, "password is required"],
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        role:{
            type:String,
            enum:["Admin", "Editor", "Guest"],
            default:"Guest"
        },
        posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
    },
    {
        timestamps:true,
        toJSON:{virtuals:true}
    }
);
const User = mongoose.model("User",userSchema);
export default User;