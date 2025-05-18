const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function formatMonth(monthString: string) {
  const monthIndex = parseInt(monthString.split("-")[1], 10) - 1;
  return monthNames[monthIndex] || monthString;
}