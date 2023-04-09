import mongoose,{Schema} from "mongoose";

const todoTaskSchema = new mongoose.Schema(
    {
    content:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    },
    status:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
},
{
    timestamps:true,
    toJSON:{virtuals:true}
}
);
const Post = mongoose.model("Post",todoTaskSchema);

export default Post;