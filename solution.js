function solution(D) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const sums = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
  const present = { Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false, Sun: false };

  // Step 1: Fill sums from input
  for (let dateStr in D) {
    const date = new Date(dateStr);
    const dayIndex = (date.getDay() + 6) % 7; // convert JS Sunday=0 → Mon=0
    const dayName = days[dayIndex];
    sums[dayName] += D[dateStr];
    present[dayName] = true;
  }

  // Step 2: Fill missing days only if bounded by real neighbors
  for (let i = 0; i < 7; i++) {
    if (!present[days[i]]) {
      // find prev real
      let prevIdx = i - 1;
      while (prevIdx >= 0 && !present[days[prevIdx]]) prevIdx--;

      // find next real
      let nextIdx = i + 1;
      while (nextIdx < 7 && !present[days[nextIdx]]) nextIdx++;

      if (prevIdx >= 0 && nextIdx < 7) {
        sums[days[i]] = (sums[days[prevIdx]] + sums[days[nextIdx]]) / 2;
        present[days[i]] = true;
      }
      // else: leave as 0
    }
  }

  return sums;
}

module.exports = solution;
