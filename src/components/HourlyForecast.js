import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  console.log("weatherData:", weatherData);
  console.log("hourlyData:", hourlyData);

  return(
    <HourlyForecastWrapper>
      {hourlyData.map((item,index)=>(
        <HourlyItem key={index}>
          <div>{item.time}시</div>
          <div>{item.temp}°C</div>
          <div>{getWeatherDescription(item.code)}</div>
        </HourlyItem>))}
    </HourlyForecastWrapper>

  );
};

export default HourlyForecast;
