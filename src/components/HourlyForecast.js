import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";


const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  return (
    <div>
      {hourlyData.map(({ date, time, temperature, weather_code }, index) => (
        <div key={index}>
          <span>{date}</span> {/* 날짜 */}
          <span> {time}</span> {/* 시간 */}
          <span> {temperature}°C</span> {/* 기온 */}
          <span> {getWeatherDescription(weather_code)}</span> {/* 한글 날씨 설명 */}
        </div>
      ))}
    </div>
  );
};
export default HourlyForecast;