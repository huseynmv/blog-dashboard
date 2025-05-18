export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' }) + '.';
  const year = String(date.getFullYear()).slice(-2);

  return `${day} ${month} ${year}`;
}
