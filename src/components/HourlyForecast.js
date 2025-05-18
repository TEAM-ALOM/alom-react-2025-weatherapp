import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);
  const unit = weatherData.daily_units.temperature_2m_max;
  return (
    <div>
      <HourlyForecastWrapper>
        {hourlyData.map((item, index) => (
          <HourlyItem key={index}>
            <div>{item.time}</div>
            <div>
              {item.temperature}
              {unit}
            </div>
            <div>{getWeatherDescription(item.weatherCode)}</div>
          </HourlyItem>
        ))}
      </HourlyForecastWrapper>
    </div>
  );
};

export default HourlyForecast;
