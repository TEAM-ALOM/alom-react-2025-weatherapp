import React from "react";
import { HourlyCard, ForecastItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourly = formatHourlyData(weatherData);

  return (
    <HourlyCard>
      {hourly.map((item, idx) => (
        <ForecastItem key={idx}>
          <div>{item.time}</div>
          <div>{item.temp}</div>
          <div>{getWeatherDescription(item.code)}</div>
        </ForecastItem>
      ))}
    </HourlyCard>
  );
};

export default HourlyForecast;