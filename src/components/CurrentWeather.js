import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>로딩중....</div>;
  }

  const now = new Date();
  const hourlyTimes = weatherData.hourly.time.map(t => new Date(t));
  const currentIndex = hourlyTimes.findIndex(time => time.getHours() === now.getHours());

  const currentTemp = weatherData.hourly.temperature_2m[currentIndex];
  const currentWeatherCode = weatherData.hourly.weather_code[currentIndex];

  const weatherText = getWeatherDescription(currentWeatherCode);

  return (
    <CurrentWeatherWrapper>
      <Temperature>{currentTemp}°C</Temperature>
      <WeatherCode>{weatherText}</WeatherCode>
    </CurrentWeatherWrapper>

  );
};

export default CurrentWeather;
