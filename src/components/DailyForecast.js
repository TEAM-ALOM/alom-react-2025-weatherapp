import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  const dailyWeatherCode = weatherData.daily.weather_code; // 일별 날씨 상태 코드
  const dailyTemperature2mMax = weatherData.daily.temperature_2m_max; // 일 최고 기온
  const degree = weatherData.daily_units.temperature_2m_max;

  const splitTime = (timeString) => {
    if (!timeString) return "time Error";

    const date = new Date(timeString);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = days[date.getDay()];

    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일 (${dayOfWeek})`;
  };

  return (
    <div>
      <DailyForecastWrapper>
        {dailyData.map((item, index) => (
          <>
            <DailyItem key={index}>
              <div>{splitTime(item.time)}</div>
              <div>{getWeatherDescription(item.code)}</div>
              <div>
                {Math.round(item.temperature)}
                {degree}
              </div>
            </DailyItem>
          </>
        ))}
      </DailyForecastWrapper>
    </div>
  );
};

export default DailyForecast;
