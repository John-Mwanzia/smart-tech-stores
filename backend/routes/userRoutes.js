import express from "express"
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post('/sign', expressAsyncHandler(async(req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(user){
        if(bcrypt.compareAsync(req.body.password, User.password)){
           res.send({
            _id: User._id,
            name: User.name,
            email: User.email,
            password: User.password,
            isAdmin: User.isAdmin

           })
        }
        return;

    }
    res.status(401).send({message: "invalid email or passsword"})
}) )

export default userRouter;