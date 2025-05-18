import React from "react";
import { DailyCard } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const daily = formatDailyData(weatherData);

  return (
    <DailyCard>
      {daily.map((item, idx) => (
        <React.Fragment key={idx}>
          <div>{item.date}</div>
          <div>{getWeatherDescription(item.code)}</div>
          <div>{item.temp}</div>
        </React.Fragment>
      ))}
    </DailyCard>
  );
};

export default DailyForecast;