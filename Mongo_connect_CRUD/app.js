const express = require("express");
const connection = require("./connection");
const registermodel = require("./model/registermodel.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// Reading or getting posts
app.get("/", async (req, res) => {
    try {
      const posts = await registermodel.find();
    //   res.json(posts); //res.json deprecated
      res.status(200).json(posts);
    } catch (e) {
      console.log(e);
    }
  });

//   gets the id from the params and finds the post by its id.
  app.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const post = await registermodel.findById(id);
      res.json(post);
    } catch (e) {
      res.status(500).send(e);
    }
  });

//   get all posts from your database
app.post("/register", async (req, res) => {
    const {name,email,password} = req.body;
    try {
      const newPost = await registermodel.create({
        
        name,email,password
      });
      res.json(newPost);
    } catch (e) {
      res.status(500).send(e);
    }
  });

//   Updating a post
  app.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content,name,email,age,address } = req.body;
    try {
      const post = await registermodel.findByIdAndUpdate(id, { title, content ,name,email,age,address  });
      const result = await registermodel.findById(id);
      res.json(result);
    } catch (e) {
      res.status(500).send(e);
    }
  });


//   Deleting a post
app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const post = await registermodel.findById(id);
      await post.remove();
      res.json("deleted");
    } catch (e) {
      res.status(500).send(e);
    }
  });

app.listen(3000, () => {
  console.log("Listening at port 3000");
});