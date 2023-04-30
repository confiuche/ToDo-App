import User from "../model/userModel.js";
import { createUserController } from "./usersController.js";



//displayTask

//addTask
export const addTaskController = async (req, res) => {
    const {content,date,status} = req.body;
    
    try {
        console.log(req.userAuth);
        const foundUser = await User.findById({userAuth})
        if(!foundUser){
            res.json({
                status:"error",
                message:"User with that email already exit"
              })
        }else{
            const user = await User.create({
                content,
                date,
                status
              })
        
        res.json({
            status:"success",
            data: user
        })
    }
    } catch (error) {
        res.json(error.message);
    }
}

//deleteTask