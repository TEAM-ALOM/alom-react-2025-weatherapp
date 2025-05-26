import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>채워주세요</div>;
  }


  const weatherCode = weatherData.hourly.weather_code[0];
  const temperature = weatherData.hourly.temperature_2m[0];
  return <div>
      <h2>현재 날씨</h2>
      <p>기온: {temperature} °C</p>
      <p>상태: {getWeatherDescription(weatherCode)}</p>
  </div>;
};

export default CurrentWeather;
