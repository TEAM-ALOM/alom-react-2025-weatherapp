export const formatKoreanDate = (isoDateStr) => {
  const date = new Date(isoDateStr);
  const month = date.getMonth() + 1; // 0부터 시작하므로 +1
  const day = date.getDate();
  const weekdayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const weekday = weekdayNames[date.getDay()];

  return `${month}월 ${day}일 (${weekday})`;
};
