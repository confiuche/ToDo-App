import mongoose,{Schema} from "mongoose";

const todoTaskSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String
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
const PostTask = mongoose.model("Post",todoTaskSchema);

export default PostTask;