import express from 'express'
import { createPostTaskController } from '../controller/postTaskController.js'
import { isLogin } from '../middlewares/isLogin.js'

const taskRoutes = express.Router();

//create task
taskRoutes.post("/create-task", isLogin, createPostTaskController)

export default taskRoutes