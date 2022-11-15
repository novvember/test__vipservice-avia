export default function formatTime(date: Date) {
  let hours = date.getHours().toString();
  let mins = date.getMinutes().toString();
  if (hours.length < 2) hours = '0' + hours;
  if (mins.length < 2) mins = '0' + mins;
  return hours + ':' + mins;
}
