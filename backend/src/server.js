import express from 'express'
import dotenv from "dotenv"
import path from "path"
import authRoutes from "./routes/auth.route.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000 
const __dirname= path.resolve()

if(process.env.NODE_ENV==="production"){
   app.use(express.static(path.join(__dirname,"..","frontend","dist")))
   app.get("/",(_,res)=>res.sendFile(path.join(__dirname,"..","frontend","dist","index.html")))
}

app.use('/api/auth',authRoutes )

app.listen(PORT,()=>console.log("Server is running on Port " + PORT))