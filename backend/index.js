import express, { response } from "express";
import {PORT,mongoDBURL} from  "./config.js"
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"
import booksRoute from "./routes/booksRoute.js";
import cors from "cors"

const app = express();

//middleware for handling cores policy
// Option:1 : Allow all origin with default of cores(*)
app.use(cors())

// Option:2 : Allow custom origins
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:["GET","POST","PUT","DELETE"],
//     allowedHeaders:["Content-Type"]
// }))
//middleware for parsing requet body
app.use(express.json());

app.get("/",(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome to MERN tutorial.")

})

app.use("/books",booksRoute);

mongoose.connect(mongoDBURL)
.then(()=>{
console.log("App connected to database.");
app.listen(PORT,()=>{
    console.log(`app is listening to port ${PORT}.`)
})})
.catch((error)=>{console.log(error)})