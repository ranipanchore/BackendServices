

import UserModel from "../Model/UserModel.js"

const getData = async (req,res) =>{
   const userData = await UserModel.find();
   res.send(userData);
}

const registerUser =async (req,res)=>{
    
    const {username, password, email, mobile} = req.body;
    
    const newUser = new UserModel({username, password, email, mobile});
    
   await newUser.save();
    
    res.send(newUser);
}
const updateUser = async(req,res)=>{
    const {id} = req.params;
    const {username, password, email, mobile} = req.body;
    const updateData = await UserModel.findByIdAndUpdate(id,{username, password, email, mobile},{new:true})
   console.log(updateData)
    res.send(updateData);
}

const deleteUser = async(req,res)=>{
    const {id} = req.params;
    const deleteUser = await UserModel.findByIdAndDelete(id)
   console.log(deleteUser)
    res.send({message:"user deleted",deleteUser});
}
export  {getData, registerUser,updateUser, deleteUser};