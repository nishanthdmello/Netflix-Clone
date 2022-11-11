const express=require("express")
const app =express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const routes=require("./routes/routes")
const cors=require('cors')


dotenv.config()
// console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL,()=>console.log("database conected"))

app.use(express.json())
app.use(cors())
app.use("/app",routes)

app.listen(4000,()=>console.log("server is running"))