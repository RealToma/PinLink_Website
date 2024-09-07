export const convertTimestampToTime = (timestamp: any) => {
  // Create a new Date object using the timestamp
  const totalSecs = timestamp / 1000;
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs - hours * 3600) / 60);
  const seconds = Math.floor(totalSecs - hours * 3600 - minutes * 60);

  // Check if any of the values are zero and only display if they are non-zero
  if (hours === 0) {
    if (minutes === 0) {
      if (seconds === 0) {
        return "0s";
      } else {
        return `${seconds}s`;
      }
    } else {
      return `${minutes}m ${seconds}s`;
    }
  } else {
    return `${hours}h ${minutes}m ${seconds}s`;
  }
};
