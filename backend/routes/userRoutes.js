import express from "express";
import { userSignin, userSignup } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/signin", userSignin);

userRouter.post("/signup", userSignup);

export default userRouter;
