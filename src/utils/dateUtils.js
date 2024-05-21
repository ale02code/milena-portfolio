export function dateUtils() {
  const date = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentDayOfWeek = daysOfWeek[date.getDay()];
  const currentMonth = months[date.getMonth()];
  const currentYear = date.getFullYear();

  return { currentDayOfWeek, currentMonth, currentYear };
}
