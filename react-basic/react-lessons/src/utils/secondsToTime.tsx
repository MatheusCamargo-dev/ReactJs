export function secondsToTime(seconds: number):string{
  const leftZero = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const hour = leftZero((seconds) / 3600);
  const min = leftZero((seconds / 60) % 60);
  const sec = leftZero((seconds % 60) % 60);
  return `${hour}h:${min}m:${sec}s`;
}
