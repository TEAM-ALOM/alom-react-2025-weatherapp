import React from "react";
import { CenterText, TempText, DescText } from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData }) => {
  const currentTemp = weatherData.hourly.temperature_2m[0];
  const currentCode = weatherData.hourly.weather_code[0];
  const description = getWeatherDescription(currentCode);

  return (
    <CenterText>
      <TempText>{currentTemp}°C</TempText>
      <DescText>{description}</DescText>
    </CenterText>
  );
};

export default CurrentWeather;