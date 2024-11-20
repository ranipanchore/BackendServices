//import statement
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');



const ImageModel = require('./image.model');
const { db } = require('./image.model');

//server initialization
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false}));


//cofiguration
dotenv.config();
const port = process.env.PORT || 8000;

mongoose
.connect(process.env.DB_URL)
.then(() => console.log("connected to db"))
.catch((err) => console.log(err));


// storage
const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage
}).single('image')

//server initialization
// const server = express();

//server middleware

// server.use('/image',imageRouter);


//server route
server.get('/', (req, res) => {
    res.send("Let's upload image")
});

server.post('/upload',(req,res)=>   {
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new ImageModel({
                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType: 'image/jpg'
                }
            })
            newImage.save()
            .then(()=>res.send('successfully uploaded'))
            .catch(err=>console.log(err))
        }
    })
})


//server start
server.listen(port, console.log(`server started ${port} `));
// server.listen(8000)