import User from "../model/userModel.js"

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
          const user = await User.create({
            firstname,
            lastname,
            email,
            password
          })
        }
      
      res.json({
          status:"success",
          data:user
      })
    } catch (error) {
      res.json(error.message);
    }
  };


  //display all user
export const displayAllController = async(req,res)=>{
    try{
      res.json({
          status:"success",
          data:"Display all users"
      })
    } catch (error) {
      res.json(error.message);
    }
  };
  

  //profile
export const profileController = async(req,res)=>{
    const userid = req.params.id;
    try{
      res.json({
          status:"success",
          data:"Get specific users "+userid
      })
    } catch (error) {
      res.json(error.message);
    }
  };


  //update users
export const updateUserController = async(req,res)=>{
    const userid = req.params.id;
    try{
      res.json({
          status:"success",
          data:`users account updated successfully`
      })
    } catch (error) {
      res.json(error.message);
    }
  };

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