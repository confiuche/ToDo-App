import { time } from "console";
import mongoose,{Schema} from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title:{
        type:String,
        required:[true,"Title of the post is required"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Description of the post is required"],
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:[true,"Category of the [post is required"],
    },
    photo:{
        type:String,
    },
    status:{
        type:String
    },
    date:{
        type:Date
    },
    time:{
        type:time
    },
},
{
    timestamps:true,
    toJSON:{virtuals:true}
}
);
const Post = mongoose.model("Post",postSchema);

export default Post;