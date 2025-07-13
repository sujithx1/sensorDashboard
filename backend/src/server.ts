import express from "express"
import cors from "cors"
import route from "./infrastructor/routes/sensorroutes"
import dotenv from 'dotenv'
dotenv.config()

const app=express()

 const corsOptions={
    origin: process.env.CLIENT_URL, 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}
app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/sensor',route)
const port=process.env.PORT!
app.listen(port,()=>console.log(`Server Running ${port}`)
)