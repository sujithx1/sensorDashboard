import { SensorData } from "../domain/entities/SensorEntity";

export class SensorGet{



  
 async generateSensorData(): Promise<SensorData> {
  const temperature = Math.floor(Math.random() * 100);
  const vibration = Math.floor(Math.random() * 30);
  const voltage = +(220 + Math.random() * 10).toFixed(2);
  const current = +(10 + Math.random() * 5).toFixed(2);

  let status: SensorData['status'] = 'Healthy';
  if (temperature > 80 && vibration > 20) status = 'Critical';
  else if (temperature > 80 || vibration > 20) status = 'Warning';

  return { temperature, vibration, voltage, current, status };
};

}