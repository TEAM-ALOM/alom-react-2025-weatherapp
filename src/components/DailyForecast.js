import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (
    <DailyForecastWrapper>
      <h3>일별 예보</h3>
      {dailyData.map((item, index) => (
        <DailyItem key={index}>
          <div>{item.time}</div>
          <div>{getWeatherDescription(item.weatherCode)}</div>
          <div>{Math.floor(item.temperature)}°C</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
