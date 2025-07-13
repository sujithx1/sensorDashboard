export interface SensorData {
  temperature: number;
  vibration: number;
  voltage: number;
  current: number;
  status: 'Healthy' | 'Warning' | 'Critical';
}
