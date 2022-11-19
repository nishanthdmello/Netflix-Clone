const express=require("express")
const app =express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const routes=require("./routes/routes")
const cors=require('cors')


dotenv.config()
mongoose.connect(process.env.DATABASE_URL,()=>console.log("database conected with ",process.env.DATABASE_URL))

app.use(express.json())
app.use(cors())
app.use("/app",routes)

app.get((req,res)=>{
    res.render("index")
})

app.listen(4000,()=>console.log("server is running"))