export default function compareDates({ dateString }) {
  const now = new Date();
  const date = new Date(dateString);
  const results = [];

  // Check if the input date is in the future
  if (date > now) {
    results.push("This year");
  }

  // Calculate the time difference in milliseconds
  const daysDiff = Math.abs(now.getDate() - date.getDate());

  if (daysDiff === 0) {
    results.push("Today");
  } else if (daysDiff < 7) {
    results.push("This week");
  }

  if (now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear()) {
    results.push("This month");
  }

  if (now.getFullYear() === date.getFullYear()) {
    results.push("This year");
  }

  if (results.length === 0) {
    results.push("More than a year from now");
  }

  return results;
}