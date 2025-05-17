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
  // 객체 리스트 12시간단위로 뽑아서 리턴

  const hourlyDataList= [];
  for (let i = 0; i <= 12; i ++) {
    const item = {
      time: weatherData.hourly.time[i],                // "2025-05-18T01:00" 슬라이싱?
      temperature: weatherData.hourly.temperature_2m[i],
      code: weatherData.hourly.weather_code[i],
    };
    hourlyDataList.push(item);
  }
  
  return hourlyDataList;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];
  
  const dailyDataList = [];
  const dailyData = weatherData.daily;
  for (let i = 0; i <= 6; i ++) {
    const item = {
      time: dailyData.time[i], // 얘도 슬라이싱
      temperature: dailyData.temperature_2m_max[i],
      code: dailyData.weather_code[i],
    };
    dailyDataList.push(item);
  }

  return dailyDataList;
};
