import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);
  const unit = weatherData.daily_units.temperature_2m_max;
  return (
    <div>
      <DailyForecastWrapper>
        {dailyData.map((item, index) => (
          <DailyItem key={index}>
            <div>{item.time}</div>
            <div>{getWeatherDescription(item.weatherCode)}</div>
            <div>
              {item.temperature}
              {unit}
            </div>
          </DailyItem>
        ))}
      </DailyForecastWrapper>
    </div>
  );
};

export default DailyForecast;
