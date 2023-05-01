import express from 'express'
import { createPostTaskController, displayAllTask, updateTaskCtrl } from '../controller/postTaskController.js'
import { isLogin } from '../middlewares/isLogin.js'

const taskRoutes = express.Router();

//create task
taskRoutes.post("/create-task", isLogin, createPostTaskController)
//display all task
taskRoutes.get("/display-all-task", isLogin, displayAllTask)
//update task
taskRoutes.put("/update-account/:id", isLogin, updateTaskCtrl)
//delete task
taskRoutes.delete("/delete-task/:id", isLogin, createPostTaskController)

export default taskRoutes