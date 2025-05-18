import React, { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import { Wrapper } from "./components/styles/StyledComponents";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max&timezone=Asia%2FTokyo&forecast_days=7";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.error("날씨 데이터 에러:", err));
  }, []);

  return (
    <Wrapper>
      {weatherData && (
        <>
          <CurrentWeather weatherData={weatherData} />
          <HourlyForecast weatherData={weatherData} />
          <DailyForecast weatherData={weatherData} />
        </>
      )}
    </Wrapper>
  );
}

export default App;