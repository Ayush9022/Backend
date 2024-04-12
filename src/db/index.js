import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected DB Host !! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;

// 1) a way of connecting to mongodb database

// import express from "express"
// const app = express();
// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error" , (error){
//             console.log("ERR.." , error);
//             throw error
//         })

//         app.listen(process.env.PORT , ()=>{
//             console.log(`App is listening at port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log("error" , error);
//         throw error;
//     }
// })()
