export const getWeek = () => {
  const date = new Date();
  const day = date.getDay();

  const diff = day === 0 ? -6 : 1 - day;
  const monday = date.getDate(date + diff);

  console.log(monday);
};
