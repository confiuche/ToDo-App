import PostTask from "../model/PostTaskModel.js";
import User from "../model/userModel.js";

export const createPostTaskController = async(req,res) => {
    const {content, status, date} = req.body
    try {
        const postOwner = await User.findById(req.userAuth)
        if(postOwner.isBlocked){
            return res.json({
                status:"error",
                message:"Sorry, Your account is blocked by admin"
            })
        }

        const createTask = await PostTask.create({
            content,
            status,
            date,
            user:postOwner._id
        })

        res.json({
            status:"success",
            data:createTask
        })

        postOwner.taskpost.push(createTask);
        await postOwner.save()

    } catch (error) {
        res.json(error.message)
    }
}


//