import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { formatHourlyData, getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>
      <h1>로딩중...</h1>
    </div>;
  }
  const hourly = formatHourlyData(weatherData);
  const current = hourly[0];
  return <CurrentWeatherWrapper>
    <Temperature>{current.temp}°C</Temperature>
    <WeatherCode>{current.description}</WeatherCode>
  </CurrentWeatherWrapper>
};

export default CurrentWeather;
