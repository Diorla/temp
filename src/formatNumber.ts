export default function formatNumber(num: number): string {
  if (Number.isNaN(num)) return (0).toFixed(4);
  return num.toFixed(4);
}
