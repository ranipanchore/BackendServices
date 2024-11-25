import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./Router/user.route.js";
import ConnectDb from "./config/ConnectionDb.js";


dotenv.config()
ConnectDb(process.env.DBURL)
// initialization 
const app = express();
const port = process.env.PORT


// Middlware
app.use(bodyParser.json())
app.use("/user",router)

app.listen(port,()=>{
    console.log(`server Started http://localhost:${port}`);
})

