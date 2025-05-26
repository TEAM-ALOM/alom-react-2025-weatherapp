import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";


const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (
    <div>
      {dailyData.map(({ date, weather_code, temperature_max }, index) => (
        <div key={index}>
          <span>{date}</span> {/* 날짜 */}
          <span> {getWeatherDescription(weather_code)}</span> {/* 한글 날씨 설명 */}
          <span> {temperature_max}°C</span> {/* 최고 기온 */}
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;