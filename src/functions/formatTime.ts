function formatTime(timeStamp: number): number {
  let string = timeStamp.toString();

  if (string.length > 10) {
    return Number(string.substring(0, 10));
  } else {
    return timeStamp;
  }
}

export default formatTime;
