import express from "express"
import { configDotenv } from "dotenv";
import db from "./Config/db.js";
import cors from "cors";
//Routes
import serviceRoute from "./routes/serviceRoute.js";

configDotenv();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

db();

//Define routes

app.use("/api/service",serviceRoute);
app.get("/",(req,res)=>{
    res.send("E-Health Api is working !")
})

app.get("*",()=>{
    res.send("")
})


const PORT = process.env.PORT || 4001;
app.listen(PORT , ()=>{
    console.log(`Server is running at port Number ${PORT}`)
})