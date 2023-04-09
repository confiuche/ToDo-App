import express from 'express'
import { createUserController, deleteUserController, displayAllController, profileController, updateUserController, userLoginCtrl } from '../controller/usersController.js';
import { isLogin } from '../middlewares/isLogin.js'
import { addTaskController } from '../controller/taskController.js';

const userRoutes = express.Router();


//create user
userRoutes.post("/create", createUserController);
//login user
userRoutes.post("/login",userLoginCtrl);
//get users
userRoutes.get("",isLogin, displayAllController);
//profile
userRoutes.get("/profile",isLogin, profileController);
//update users
userRoutes.put("/:id", updateUserController);
//delete users
userRoutes.delete("/:id", deleteUserController);

//displayTask
userRoutes.get("")
//addTask
userRoutes.post("/addTask",addTaskController)
//deleteTask
userRoutes.delete("")


export default userRoutes;