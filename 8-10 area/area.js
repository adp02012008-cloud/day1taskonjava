document.getElementById("calcBtn").addEventListener("click", () => {
  const b = Number(document.getElementById("breadth").value);
  const h = Number(document.getElementById("height").value);

  if (b <= 0 || h <= 0 || isNaN(b) || isNaN(h)) {
    alert("Please enter positive numbers!");
    return;
  }

  const area = 0.5 * b * h;
  document.getElementById("result").textContent = `Area = ${area}`;
});