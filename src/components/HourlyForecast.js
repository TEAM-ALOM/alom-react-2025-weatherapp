import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  const degree = weatherData.hourly_units.temperature_2m;
  const hourKor = "시";

  return (
    <div>
      <HourlyForecastWrapper>
        {hourlyData.map((item, index) => (
          <>
            <HourlyItem key={index}>
              <div>
                {index}
                {hourKor}
              </div>
              <div>
                {Math.round(item.temperature)}
                {degree}
              </div>
              <div>{getWeatherDescription(item.code)}</div>
            </HourlyItem>
          </>
        ))}
      </HourlyForecastWrapper>
    </div>
  );
};

export default HourlyForecast;
