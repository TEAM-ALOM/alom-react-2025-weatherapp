import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";
import { formatKoreanDate } from "../utils/date";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (
    <DailyForecastWrapper>
      {dailyData.map((item, index) => (
        <DailyItem key={index}>
          <div>{formatKoreanDate(item.date)}</div>
          <div>{getWeatherDescription(item.weatherCode)}</div>
          <div>{Math.round(item.maxTemp)}°C</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
