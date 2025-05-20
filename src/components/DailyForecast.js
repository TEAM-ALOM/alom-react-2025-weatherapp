import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (
    <DailyForecastWrapper>
      {dailyData.map((item,index)=>(
        <DailyItem key={index}>
          <span>{item.date}</span>
          <span>{getWeatherDescription(item.code)}</span>
          <span>{item.temp}°C</span>
        </DailyItem>
      ))}
    </DailyForecastWrapper>

  );
};

export default DailyForecast;
