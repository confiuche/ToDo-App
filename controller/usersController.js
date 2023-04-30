import User from "../model/userModel.js"
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import { obtainTokenFromHeader } from "../utils/obtainTokenFromHeader.js";


//create user account
export const createUserController = async(req,res)=>{
    const {firstname, lastname, profilephoto, email, password} = req.body
    try{
      //check if user already exist
      const foundUser = await User.findOne({email});
      
        if(foundUser){
          res.json({
            status:"error",
            message:"User with that email already exit"
          })
        }else{
          //hash password
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password,salt);
          const user = await User.create({
            firstname,
            lastname,
            email,
            password:hashPassword,
          })
        
      
      res.json({
          status:"success",
          data:user
      })
    }
    } catch (error) {
      res.json(error.message);
    }
  }


  //login user
export const userLoginCtrl = async (req,res)=>{
  const {email,password} = req.body;
  try { 
      //get email
      const isUserFound = await User.findOne({email});
      if(!isUserFound){
          return res.json({
              message:"Wrong login credential",
          })
      }

      //get password
      const isPasswordFound = await bcrypt.compare(password,isUserFound.password);
      if(!isPasswordFound){
          return res.json({
              message:"Wrong login credential"
          })

      }
      res.json({
          status:"success",
          data:{
          firstname: isUserFound.firstname,
          lastname: isUserFound.lastname,
          email: isUserFound.email,
          token:generateToken(isUserFound._id)
          }
      })

  }catch(error){
      res.json(error.message);
  }
}


  //display all user
export const displayAllController = async(req,res)=>{
    try{
      const users = await User.find({});
      res.json({
          status:"success",
          data:users
      })
    } catch (error) {
      res.json(error.message);
    }
  };
  

  //profile
export const profileController = async(req,res)=>{
    //const userid = req.params.id;
    //console.log(req.headers);
    try{
      const token = obtainTokenFromHeader(req);
      //console.log(token);
      //console.log(req.userAuth);
      const foundUser = await User.findById(req.userAuth)
      if(!foundUser){
        return res.json({
          status:"error",
          message:"No user associated with that id",
        })
      }

      res.json({
          status:"success",
          data:foundUser
      })
    } catch (error) {
      res.json(error.message)
    }
  }


//update users
export const updateUserController = async(req,res)=>{
  //const userid = req.params.id;
  try{
    console.log()
    const updateUser = await User.findByIdAndUpdate(req.userAuth,{
      
      $set:{
        email:req.body.email
      }
    },{
      new:true
    })
      res.json({
          status:"success",
          data:updateUser
  })
  } catch(error){
      res.json(error.message);
  }
}

  //Delete user
export const deleteUserController = async(req,res)=>{
    const userid = req.params.id;
    try{
      res.json({
          status:"success",
          data:`users account deleted successfully`
      })
    } catch (error) {
      res.json(error.message);
    }
  };