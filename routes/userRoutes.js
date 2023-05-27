import express from 'express'
import { createUserController, deleteUserController, displayAllController, forgetPasswordCtr, profileController, resetPasswordCtr, updateUserController, userLoginCtrl } from '../controller/usersController.js';
import { isLogin } from '../middlewares/isLogin.js'
import { validateUser } from '../middlewares/userValidation.js';
import { isAdmin } from '../middlewares/isAdmin.js';



const userRoutes = express.Router();


//create user
userRoutes.post("/create", validateUser, createUserController);
//login user
userRoutes.post("/login",userLoginCtrl);
//get users
userRoutes.get("",isLogin, displayAllController);
//profile
userRoutes.get("/profile",isLogin, profileController);
//update users
userRoutes.put("/update-account",isLogin, updateUserController);
//delete users
userRoutes.delete("/delete-account",isLogin, deleteUserController);
//forget password
userRoutes.post("/forget-password", forgetPasswordCtr)
//reset password
userRoutes.post("/reset-password", resetPasswordCtr)


export default userRoutes;