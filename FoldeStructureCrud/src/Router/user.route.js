import express from "express"
import {getData, registerUser,updateUser, deleteUser} from "../Controller/user.controller.js"

const router = express.Router();

router.get("/get",getData)
router.post("/signup", registerUser)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)

export default router