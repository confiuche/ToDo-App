import express from 'express'
import { createPostTaskController, deleteTaskCtrl, displayAllTask, updateTaskCtrl } from '../controller/postTaskController.js'
import { isLogin } from '../middlewares/isLogin.js'

const taskRoutes = express.Router();

//create task
taskRoutes.post("/create-task", isLogin, createPostTaskController)
//display all task
taskRoutes.get("/display-all-task/:id", isLogin, displayAllTask)
//update task
taskRoutes.put("/update-account/:id", isLogin, updateTaskCtrl)
//delete task
taskRoutes.delete("/delete-task/:id", isLogin, deleteTaskCtrl)

export default taskRoutes