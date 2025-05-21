import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";


const getCurrentWeather = (weatherData) => {
  const hourIndex = new Date().getHours();
  const hourly = weatherData.hourly;

  if (
    !hourly ||
    !hourly.temperature_2m ||
    !hourly.temperature_2m[hourIndex]
  ) {
    return null;
  }

  return {
    temperature: hourly.temperature_2m[hourIndex],
    time: hourly.time[hourIndex],
    weatherCode: hourly.weather_code[hourIndex],
  };
};

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>현재날씨 로딩중...</div>;
  }

  const currentData = getCurrentWeather(weatherData);

  if (!currentData) {
    return <div>현재 시각의 날씨 정보가 없습니다.</div>;
  }

  return (
    <CurrentWeatherWrapper>
      <h3>
        현재 위치 : 서울
        <br />
        현재 시각 : {new Date(currentData.time).getHours()}시
      </h3>
      <Temperature>{Math.floor(currentData.temperature)}°C</Temperature>
      <WeatherCode>{getWeatherDescription(currentData.weatherCode)}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
