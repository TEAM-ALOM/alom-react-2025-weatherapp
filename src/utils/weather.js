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

export const getWeatherDescription = (code) => {
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  const { time, temperature_2m, weather_code } = weatherData.hourly;
  const now = new Date();
  const currentHour = now.getHours();
  const startIdx = time.findIndex((t) => new Date(t).getHours() === currentHour);

  return Array.from({ length: 6 }, (_, i) => ({
    time: `${(currentHour + i) % 24}시`,
    temp: `${temperature_2m[startIdx + i]}°C`,
    code: weather_code[startIdx + i],
  }));
};

export const formatDailyData = (weatherData) => {
  const { time, temperature_2m_max, weather_code } = weatherData.daily;

  return time.map((dateStr, idx) => {
    const date = new Date(dateStr);
    const options = { month: "numeric", day: "numeric", weekday: "short" };
    const formatted = date.toLocaleDateString("ko-KR", options);

    return {
      date: formatted,
      code: weather_code[idx],
      temp: `${temperature_2m_max[idx]}°C`,
    };
  });
};