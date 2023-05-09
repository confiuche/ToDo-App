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

//Display All task by user
export const displayAllTask = async(req,res)=>{
    const showAll = await PostTask.find({user:req.params.id})
    console.log(showAll);
   try{
       return res.json({
            status:"success",
            data:showAll
        })
    
      } catch (error) {
        res.json(error.message);
      }

    
  };


//update task
export const updateTaskCtrl = async(req, res) => {
    const { status } = req.body
    try {
        const foundStatus = await PostTask.findById(req.params.id)
        console.log(foundStatus);

        if(!foundStatus){
            res.json({
                status:"error",
                message:"record not found"
            })
        }

        const found = await PostTask.findByIdAndUpdate(req.params.id,{
            $set:{
                status:req.body.status
            }
            },{
                new:true
        })
        res.json({
            status:"success",
            data:found
        })
    } catch (error) {
        res.json(error.message)
    }
}


//delete task
export const deleteTaskCtrl = async(req, res) => {

    try {
        const taskDelete = await PostTask.findByIdAndDelete(req.params.id)
        console.log(taskDelete);
        res.json({
            status:"success",
            data:taskDelete
        })
    } catch (error) {
        res.json(error.message)
    }
}