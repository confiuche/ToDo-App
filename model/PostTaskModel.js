import mongoose,{Schema} from "mongoose";

const todoTaskSchema = new mongoose.Schema(
    {
    content:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},
{
    timestamps:true,
    toJSON:{virtuals:true}
}
);
const Post = mongoose.model("Post",todoTaskSchema);

export default Post;