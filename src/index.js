import { urlencoded } from "express";
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 800;

// console.log(process.env.CLOUDINARY_CLOUD_NAME);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listening at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("mogodb failed to connect", error);
  });
