export default function formatDuration(dateStart: Date, dateEnd: Date) {
  const diff = (+dateEnd - +dateStart) / (60 * 1000);
  const hours = Math.floor(diff / 60);
  const mins = diff % 60;
  return `В пути ${hours > 0 ? ` ${hours} ч ` : ''}${mins} мин`;
}
