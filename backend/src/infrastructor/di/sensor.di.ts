import { SensorGet } from "../../usecases/getSensoruscase";
import { SensotController } from "../controller/sensorcontroller";


const getseonsoruseCase=new SensorGet()
export const sensorcontroller=new SensotController(getseonsoruseCase)



