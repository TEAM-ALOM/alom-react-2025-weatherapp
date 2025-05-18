import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, #a1c4fd, #c2e9fb);
  min-height: 100vh;
  padding: 40px 20px;
  color: #fff;
  font-family: 'Helvetica Neue', sans-serif;
`;

export const CenterText = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const TempText = styled.h1`
  font-size: 56px;
  margin: 0;
`;

export const DescText = styled.p`
  font-size: 24px;
  margin: 8px 0 0;
`;

export const HourlyCard = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 20px;
  margin: 0 auto 40px;
  max-width: 768px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 16px;
  color: #fff;
`;

export const ForecastItem = styled.div`
  flex: 1;
`;

export const DailyCard = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 20px;
  margin: 0 auto;
  max-width: 768px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 16px;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;