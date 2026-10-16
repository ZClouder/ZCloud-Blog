/**
 * 相对时间文案。静态站在构建时算一次，页面里再由 BaseLayout 的脚本按真实当前时间刷新，
 * 避免站点长期不重建时「7 天前」逐渐失真。
 */
export function relativeTime(date: Date, now: Date = new Date()): string {
  const days = Math.floor((now.valueOf() - date.valueOf()) / 86400000);
  if (days < 0) return '尚未到来';
  if (days === 0) return '今天';
  if (days === 1) return '昨天';
  if (days < 30) return `${days} 天前`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} 个月前`;
  return `${Math.floor(days / 365)} 年前`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
