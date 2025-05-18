import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #87ceeb, #4682b4);
  padding: 20px;
`;

export const CurrentWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: white;
`;

export const Temperature = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

export const WeatherCode = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const HourlyForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  overflow-x: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  margin-top: auto;

  &::-webkit-scrollbar {
    height: 6px; /* 스크롤바 두께 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4); /* 손잡이 색상 */
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.6); /* 호버 시 색상 */
  }
`;

export const HourlyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 10px;
  min-width: 100px;
  font-size: 0.9rem;
  gap: 10px;
`;

export const DailyForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  margin-top: 20px;
`;

export const DailyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-bottom: none;
  }
`;
