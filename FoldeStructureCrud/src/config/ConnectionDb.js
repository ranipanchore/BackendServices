import mongoose  from "mongoose";



const ConnectDb = (DBURL) =>{
    mongoose.connect(DBURL).then((req,res)=>{
        console.log("Mongo connect successfully");
    }).catch((err)=>{
        console.log(err);
    })
}


export default ConnectDb