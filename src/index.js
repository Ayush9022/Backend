import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

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
