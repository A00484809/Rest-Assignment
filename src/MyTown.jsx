import React, { useState, useEffect } from "react";
import axios from "axios";
import sunny from "./sunny.png";
import mild from "./mild.png";
import cold from "./cold.png";

const MyTown = () => {
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState("C");
  const [weatherImage, setWeatherImage] = useState(null);

  const latitude = 44.651070; 
  const longitude = -63.582687;
  const apiKey = "1c78de20d7627d3030fdce63090de3b7"; 

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        const tempCelsius = response.data.main.temp;
        setTemperature(tempCelsius);
        setWeatherImage(
          tempCelsius <= 10 ? cold : tempCelsius < 20 ? mild : sunny
        );
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  const toggleTemperatureUnit = () => {
    if (unit === "C") {
      setTemperature((temperature * 9) / 5 + 32);
      setUnit("F");
    } else {
      setTemperature(((temperature - 32) * 5) / 9);
      setUnit("C");
    }
  };

  return (
    <div className="town-container">
  <h1>I live in Halifax, NS</h1>
  <img src="https://images.marketleader.com/assets/46/1622346_40286604_f.png" alt="Halifax" style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }} />
  <div className="temperature-info">
    <p>Current Temperature: {temperature ? temperature.toFixed(1) : "--"}°{unit}</p>
    <img src={weatherImage} alt="Weather Icon" style={{ width: "50px" }} />
    <button onClick={toggleTemperatureUnit}>
      Change to °{unit === "C" ? "F" : "C"}
    </button>
  </div>
</div>

  );
};

export default MyTown;
