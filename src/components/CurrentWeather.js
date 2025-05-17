import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

// 현재 기온과 날씨 상태 표시
const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // currentWeather
  const currentTemperature = weatherData.daily.temperature_2m_max[0];
  const degree = weatherData.daily_units.temperature_2m_max;
  const currentWeatherCode = weatherData.daily.weather_code[0];
  const message = getWeatherDescription(currentWeatherCode);

  console.log(weatherData);

  return (
    <CurrentWeatherWrapper>
      <Temperature>
        {Math.round(currentTemperature)}
        {degree}
      </Temperature>
      <WeatherCode>{message}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
