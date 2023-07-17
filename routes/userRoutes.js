import express from 'express'
import { 
    createUserController,
    deleteUserController,
    displayAllController,
    forgetPasswordCtr, 
    passwordSettingCtr, 
    profileController, 
    profilePhotoUploadCtr, 
    resetPasswordCtr, 
    updateUserController, 
    userLoginCtrl 
} from '../controller/usersController.js';
import { isLogin } from '../middlewares/isLogin.js'
import { validateUser } from '../middlewares/userValidation.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import multer from 'multer';
import storage from '../config/cloudinary.js';
import initializePayment from '../controller/payStack.js';


const upload = multer({storage})


const userRoutes = express.Router();


//create user
userRoutes.post("/create", validateUser, createUserController);
//login user
userRoutes.post("/login",userLoginCtrl);
//get users
userRoutes.get("",isLogin, displayAllController);
//upload profile photo
userRoutes.post("/profile-image", isLogin, upload.single("profile"), profilePhotoUploadCtr)
//profile
userRoutes.get("/profile",isLogin, profileController);
//update users
userRoutes.put("/update-account",isLogin, updateUserController);
//delete users
userRoutes.delete("/delete-account",isLogin, deleteUserController);
//forget password
userRoutes.post("/forget-password", forgetPasswordCtr);
//reset password
userRoutes.post("/reset-password", resetPasswordCtr)
//password setting
userRoutes.put("/security",isLogin, passwordSettingCtr)
userRoutes.post('/acceptpayment', isLogin, initializePayment.acceptPayment);


export default userRoutes;