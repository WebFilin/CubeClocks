export default function timer(remainingTime) {
  const date = new Date(remainingTime);
  const days = date.getUTCDate() - 1;
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  return { days, hours, minutes, seconds };
}
