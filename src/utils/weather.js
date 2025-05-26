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

  const times = weatherData.hourly.time.slice(0, 24); // 24시간 분량 시간 배열
  const temperatures = weatherData.hourly.temperature_2m.slice(0, 24);
  const weatherCodes = weatherData.hourly.weather_code.slice(0, 24);

  // 시간 문자열 예시: "2025-05-26T15:30"
  const result = times.map((datetime, idx) => {
    const [date, time] = datetime.split('T');
    const timeHHmm = time ? time.substring(0, 5) : "";

    return {
      date,                // "YYYY-MM-DD"
      time: timeHHmm,      // "HH:mm"
      temperature: temperatures[idx],
      weather_code: weatherCodes[idx]
    };
  });

  return result;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];

  const dates = weatherData.daily.time;
  const weatherCodes = weatherData.daily.weather_code;
  const tempsMax = weatherData.daily.temperature_2m_max;

  const result = dates.map((dateStr, idx) => ({
    date: dateStr,                 // ISO 8601 형식 날짜 문자열 그대로
    weather_code: weatherCodes[idx],
    temperature_max: tempsMax[idx]
  }));

  return result;
};