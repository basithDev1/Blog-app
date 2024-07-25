import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
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
    res.status(500).json({ message: err.message });
  }
};
