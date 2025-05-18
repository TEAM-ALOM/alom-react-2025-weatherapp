import React from "react";
import { DailyForecastWrapper, DailyItem} from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);
  const krDays =['일','월','화','수','목','금','토'];
  return (
    <DailyForecastWrapper>
      {dailyData.map((item,i) => (
        <DailyItem key={item.date}>
          <span>
            {item.date.slice(5,7)}월 
            {' '+item.date.slice(8,10)}일  
            {" (" + krDays[i] + ")"}
            </span>
          <span>{item.description}</span>
          <span>{item.maxTemp}°C</span>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
