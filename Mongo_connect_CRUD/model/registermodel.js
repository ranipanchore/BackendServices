const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
   
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: "Email is required",
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    },
    password:{
        type: String,
        required: "Password is required",
    },
    about:{
        type: String,
    }
  },
  { timestamps: true }
);

const registration = mongoose.model("registration", schema);
module.exports = registration;