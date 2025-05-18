import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }
  const unit = weatherData.daily_units.temperature_2m_max;
  const index = new Date().getHours();

  const temperature = Math.round(weatherData.hourly.temperature_2m[index]);
  const weatherCode = weatherData.hourly.weather_code[index];
  return (
    <div>
      <CurrentWeatherWrapper>
        <Temperature>
          {temperature}
          {unit}
        </Temperature>
        <WeatherCode>{getWeatherDescription(weatherCode)}</WeatherCode>
      </CurrentWeatherWrapper>
    </div>
  );
};

export default CurrentWeather;
