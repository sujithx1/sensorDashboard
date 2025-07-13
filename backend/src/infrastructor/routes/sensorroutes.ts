
import express from "express"
import { sensorcontroller } from "../di/sensor.di"
const route=express.Router()



route.get('/',(req,res)=>{
    sensorcontroller.getSensorData(req,res)
})

export default route
