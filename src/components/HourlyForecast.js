import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData).slice(0, 12);

  return (
    <HourlyForecastWrapper>
      {hourlyData.map((item, index) => {
        const hour = parseInt(item.time.slice(0, 2), 10); // "00:00" -> 0
        return (
          <HourlyItem key={index}>
            <div>{hour}시</div>
            <div>{Math.round(item.temperature)}°C</div>
            <div>{getWeatherDescription(item.weatherCode)}</div>
          </HourlyItem>
        );
      })}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
