import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  return (
    <HourlyForecastWrapper>
      {hourlyData.map((item, index) => (
        <HourlyItem key={index}>
          <div>{item.time}</div>
          <div>{Math.floor(item.temperature)}°C</div>
          <div>{getWeatherDescription(item.weatherCode)}</div>
        </HourlyItem>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
