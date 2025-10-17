let seats = document.getElementById("seats"), count = 0;

for (let i = 0; i < 25; i++) {
  let s = document.createElement("div");
  s.className = "seat";
  s.onclick = () => {
    if (!s.classList.contains("booked")) {
      s.classList.toggle("selected");
      update();
    }
  };
  seats.appendChild(s);
}

function update() {
  count = document.querySelectorAll(".selected").length;
  document.getElementById("count").textContent = count;
  document.getElementById("total").textContent = count * +movie.value;
}

function conform() {
  if (count > 0) pay.style.display = "block";
  else alert("Select at least one seat!");
}


paybtn.onclick = () => {
  const username = user.value.trim();
  const password = pass.value.trim();

  if (username !== "user" || password !== "1234") {
    alert("Invalid GPay username or password!");
    return;
  }

  alert("Payment successful!");

  document.querySelectorAll(".selected").forEach(seat => {
    seat.classList.replace("selected", "booked");
  });

  pay.style.display = "none";
  user.value = pass.value = "";
  update();
};

