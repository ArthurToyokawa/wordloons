import seedrandom from 'seedrandom';

export default function getDailyTower(max: number) {
  const now = new Date();
  const timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString(); 

  seedrandom(timestamp, { global: true });
  const dailyIndex = Math.floor(Math.random() * max);   
  return dailyIndex
}