import express from 'express'
import { createPostTaskController, deleteTaskCtrl, displayAllTask, updateTaskCtrl } from '../controller/postTaskController.js'
import { isLogin } from '../middlewares/isLogin.js'
import { isAdmin } from '../middlewares/isAdmin.js';



const taskRoutes = express.Router();

//create task
taskRoutes.post("/create-task", isLogin, createPostTaskController)
//display all task
taskRoutes.get("/display-all-task", isLogin, displayAllTask)
// //display all task
// taskRoutes.get("/admin-display-task", isLogin, isAdmin, displayTaskByAdmin)
//update task
taskRoutes.put("/update-task/:id", isLogin, updateTaskCtrl)
//delete task
taskRoutes.delete("/delete-task/:id", isLogin, deleteTaskCtrl)
// //delete task by admin
// taskRoutes.delete("/admin-delete-task/:id", isLogin, isAdmin, deleteTaskByAdmin)

export default taskRoutes