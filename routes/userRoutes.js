import express from 'express'
import { createUserController, deleteUserController, displayAllController, profileController, updateUserController } from '../controller/usersController.js';

const userRoutes = express.Router();


//create user
userRoutes.post("/create", createUserController);
//get users
userRoutes.get("", displayAllController);
//profile
userRoutes.get("/:id", profileController);
//update users
userRoutes.put("/:id", updateUserController);
//delete users
userRoutes.delete("/:id", deleteUserController);


export default userRoutes;