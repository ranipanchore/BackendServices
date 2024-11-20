const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
};

const uri = `mongodb+srv://panchorerani1:stS2GzJ5zTvoWgJC@cluster0.lw621.mongodb.net/healapp?retryWrites=true&w=majority&appName=Cluster0`
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;