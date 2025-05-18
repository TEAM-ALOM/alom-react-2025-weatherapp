export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const { time, temperature_2m, weather_code } = weatherData.hourly;
  const result = [];

  for (let i = 0; i < 12; i++) {
    result.push({
      time: `${new Date(time[i]).getHours()}시`,
      temperature: `${Math.round(temperature_2m[i])}`,
      weatherCode: weather_code[i],
    });
  }

  return result;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const { time, weather_code, temperature_2m_max } = weatherData.daily;
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const result = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(time[i]);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = week[date.getDay()];

    result.push({
      time: `${month}월 ${day}일 (${weekday})`,
      weatherCode: weather_code[i],
      temperature: `${Math.round(temperature_2m_max[i])}`,
    });
  }
  return result;
};
