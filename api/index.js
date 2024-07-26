import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

//middleware for error handling
app.use((err,req, res, next, ) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
