import { Request, Response } from "express";
import { SensorGet } from "../../usecases/getSensoruscase";

export class SensotController {
  constructor(private getsensordatausecase: SensorGet) {}

  async getSensorData(req: Request, res: Response) {
    try {
      const sensors = await this.getsensordatausecase.generateSensorData();
   
      
      console.log(sensors);
      
      return res
        .status(200)
        .json({ message: "Get Sensors data", success: true, sensorData:sensors });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
