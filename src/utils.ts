/**
 * Love Page — 工具函数
 */

export function escapeHtml(s: string): string {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

export interface DiffResult {
  years: number;
  days: number;
  h: string;
  m: string;
  s: string;
}

export function diffFrom(dateStr: string): DiffResult {
  const start = new Date(dateStr + 'T00:00:00');
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let lastAnniv = new Date(
    start.getFullYear() + years,
    start.getMonth(),
    start.getDate()
  );
  if (lastAnniv > now) {
    years--;
    lastAnniv = new Date(
      start.getFullYear() + years,
      start.getMonth(),
      start.getDate()
    );
  }

  const ms = now.getTime() - lastAnniv.getTime();
  return {
    years,
    days: Math.floor(ms / 864e5),
    h: String(Math.floor((ms % 864e5) / 36e5)).padStart(2, '0'),
    m: String(Math.floor((ms % 36e5) / 6e4)).padStart(2, '0'),
    s: String(Math.floor((ms % 6e4) / 1e3)).padStart(2, '0'),
  };
}
