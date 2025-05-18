import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading || !weatherData) {
    return <div>날씨 정보를 불러오는 중입니다...</div>;
  }

  const currentTemp = weatherData.hourly.temperature_2m[0];
  const currentCode = weatherData.hourly.weather_code[0];
  const description = getWeatherDescription(currentCode);

  return (
    <CurrentWeatherWrapper>
      <Temperature>{currentTemp}°C</Temperature>
      <WeatherCode>{description}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;