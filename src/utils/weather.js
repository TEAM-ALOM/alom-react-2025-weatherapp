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

  const times = weatherData.hourly.time;
  const temps = weatherData.hourly.temperature_2m;
  const codes = weatherData.hourly.weather_code;

  const now = new Date();
  const currentHour = now.getHours();

  const result = [];
  for (let i = 0; i < times.length; i++) {
    const hour = new Date(times[i]).getHours();
    if (hour >= currentHour && result.length < 12) {
      result.push({
        time: `${hour}시`,
        temp: temps[i],
        code: codes[i],
      });
    }
    if (result.length >= 12) break;
  }

  return result;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];

  const dates = weatherData.daily.time;
  const temps = weatherData.daily.temperature_2m_max;
  const codes = weatherData.daily.weather_code;

  return dates.map((dateStr, index) => {
    const date = new Date(dateStr);
    const weekday = date.toLocaleDateString("ko-KR", { weekday: "long" });
    return {
      date: weekday,
      temp: temps[index],
      code: codes[index],
    };
  });
};