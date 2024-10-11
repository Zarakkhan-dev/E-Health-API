import express from "express"
import { configDotenv } from "dotenv";
import db from "./Config/db.js";
import cors from "cors";
//Routes
import serviceRoute from "./routes/serviceRoute.js";
import authRoute from "./routes/authRoute.js"
configDotenv();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

db();

//Define routes
app.get("/",(req,res)=>{
    res.send("E-Health Api is working !")
})
app.use("/api/service",serviceRoute);
app.use("/api/auth",authRoute)


app.use("*",()=>{
    res.send("Internal Error")
})


const PORT = process.env.PORT || 4001;
app.listen(PORT , ()=>{
    console.log(`Server is running at port Number ${PORT}`)
})