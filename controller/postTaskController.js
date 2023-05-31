import PostTask from "../model/PostTaskModel.js";
import User from "../model/userModel.js";
import AppError from "../utils/AppErr.js";

export const createPostTaskController = async(req,res,next) => {
    const {title, status} = req.body
    try {
        const postOwner = await User.findById(req.userAuth)
        if(postOwner.isBlocked){
            return next(AppError("Sorry, Your account is blocked by admin",400))
        }

        const createTask = await PostTask.create({
            title,
            status,
            user:postOwner._id
        })

        res.json({
            status:"success",
            data:createTask
        })

        postOwner.taskpost.push(createTask);
        await postOwner.save()

    } catch (error) {
        next(AppError(error.message))
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


  //Display all task by admin
  export const displayTaskByAdmin = async(req,res)=>{
    const displayTask = await PostTask.find({}).populate("user")

    try {
        res.json({
            status:"success",
            data:displayTask
        })
    } catch (error) {
        res.json(error.message)
    }
  }

  

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



// // delete post by admin
// export const deleteTaskByAdmin = async (req, res) => {
//     const taskRemove = await PostTask.findById(req.params.id);
//     try {
//       if (!taskRemove) {
//         return res.json({
//           status: "error",
//           message: "post not found",
//         });
//       }
//       await taskRemove.remove();
//       res.json({
//         status: "success",
//         data: "post deleted successfully",
//       });
//     } catch (error) {
//       res.json(error.message);
//     }
//   };

// delete post by admin
export const deleteTaskByAdmin = async (req, res) => {
    const taskRemove = await PostTask.findByIdAndDelete(req.params.id);
    try {
      if (!taskRemove) {
        return res.json({
          status: "error",
          message: "Task not found",
        });
      }
      
      res.json({
        status: "success",
        data: "Task deleted successfully",
      });
    } catch (error) {
      res.json(error.message);
    }
  };