import User from "../model/userModel.js";



//displayTask

//addTask
export const addTaskController = async (req, res) => {
    const {content,date} = req.body;
    try {
        res.json({
            status:"success",
            data: `Content ${content} and data ${date} added successfully`
        })
    } catch (error) {
        res.json(error.message);
    }
}

//deleteTask