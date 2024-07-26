import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error_handler.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    var err=errorHandler(400, "All fields are required")
    next(err);
    return;
  }
  // created a newUser using the Mondo db user model which we have created in the models folder
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};
