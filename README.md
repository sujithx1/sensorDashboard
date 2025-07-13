
                                SENSOR READING 


This project is a simple Industrial IoT dashboard built with React (TypeScript) on the frontend and Node.js + Express (TypeScript) on the backend. The backend simulates machine sensor data (temperature, vibration, voltage, current) and provides it via an API. The frontend fetches this data every 5 seconds and displays it in a styled dashboard with live status updates and toast alerts based on defined thresholds. The machine status logic is implemented as:

Critical if both temperature > 80°C and vibration > 20 mm/s

Warning if either temperature or vibration exceeds the limit

Healthy otherwise

I followed clean architecture principles in the backend to separate business logic (status calculation) from infrastructure (Express). On the frontend, I used modular components, Axios for API communication, and react-toastify for user-friendly alerts. In a production environment, I would replace mock data with real sensor feeds (via MQTT/WebSocket), improve error handling and retry logic, add authentication and role-based access, and use persistent storage (like MongoDB). Additionally, I would integrate charts, real-time updates using sockets, and a design system for UI consistency.