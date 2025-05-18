import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  const temperature = weatherData?.current_weather?.temperature;
  const code = weatherData?.current_weather?.weathercode;

  return (
    <div>
      <CurrentWeatherWrapper>
        <Temperature>{Math.round(temperature)}°C</Temperature>
        <WeatherCode>{getWeatherDescription(code)}</WeatherCode>
      </CurrentWeatherWrapper>
    </div>
  );
};

export default CurrentWeather;
