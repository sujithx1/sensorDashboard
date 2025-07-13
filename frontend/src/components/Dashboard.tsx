import { useEffect, useRef, useState } from "react";
import { getsensorData } from "../assets/axios/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css"; 

type SensorData = {
  temperature: number;
  vibration: number;
  voltage: number;
  current: number;
  status: "Healthy" | "Warning" | "Critical";
};

const Dashboard = () => {
  const [data, setData] = useState<SensorData | null>(null);
  const prevStatus = useRef<string>("");

  useEffect(() => {
    const fetch = async () => {
      const result = await getsensorData();

      if (result.sensorData) {
        setData(result.sensorData);

        if (
          result.sensorData.status !== "Healthy" &&
          result.sensorData.status !== prevStatus.current
        ) {
          toast.warn(`Machine status: ${result.sensorData.status}`, {
            position: "top-right",
            autoClose: 3000,
          });
        }

        prevStatus.current = result.sensorData.status;
      }
    };

    fetch();
    const interval = setInterval(fetch, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h2> Machine Sensor Dashboard</h2>

      {data ? (
        <div className="sensor-card">
          <div className="sensor-item">
            <span> Temperature</span>
            <strong>{data.temperature}°C</strong>
          </div>
          <div className="sensor-item">
            <span> Vibration</span>
            <strong>{data.vibration} mm/s</strong>
          </div>
          <div className="sensor-item">
            <span> Voltage</span>
            <strong>{data.voltage} V</strong>
          </div>
          <div className="sensor-item">
            <span> Current</span>
            <strong>{data.current} A</strong>
          </div>
          <div className={`sensor-status ${data.status.toLowerCase()}`}>
            {data.status}
          </div>
        </div>
      ) : (
        <p className="loading">Loading sensor data...</p>
      )}
    </div>
  );
};

export default Dashboard;
