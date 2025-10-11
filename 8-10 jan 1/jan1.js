function findSundays() {
  let result = [];
  for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1); // Jan 1 of that year
    if (date.getDay() === 0) { // 0 = Sunday
      result.push(year);
    }
  }
  document.getElementById("output").innerText = "January 1st is Sunday in: " + result.join(", ");
}
