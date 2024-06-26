import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken } from "../modules/auth.js";

export const userSignin = expressAsyncHandler(async (req, res) => {
  //express-async-handler =>middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    }
    return;
  } else {
    res.status(401).send({ message: "invalid email or passsword" });
  }
});

export const userSignup = expressAsyncHandler(async (req, res) => {
  const newUser = await User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user),
  });
});
