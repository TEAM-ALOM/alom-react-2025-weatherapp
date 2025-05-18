import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  return (
    <HourlyForecastWrapper>
        {hourlyData.map(item => (
          <HourlyItem key={item.time}>
            <p>{item.time}시</p>
            <p>{item.temp}°C</p>
            <p style={{ margin: 0 }}>{item.description}</p>
          </HourlyItem>
          
        ))}
      </HourlyForecastWrapper>
      );
};

export default HourlyForecast;
