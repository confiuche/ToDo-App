import PostTask from "../model/PostTaskModel.js";
import User from "../model/userModel.js";

export const createPostTaskController = async(req,res) => {
    try {
        res.json({
            status:"success",
            data:""
        })
    } catch (error) {
        res.json(error.message)
    }
}