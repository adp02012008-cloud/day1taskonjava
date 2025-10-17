let total = 0,
  discount = false;
const stock = { Chips: 10, Chocolate: 10, Juice: 10, biscuits: 10 };
const cart = {};

function addItem(name, price) {
  const qty = +document.getElementById("qty-" + name).value;
  if (qty == 0) {
    alert("Zero quantity is not allowed..");
  }
  if (qty > stock[name]) {
    alert("Not enough stock available!");
    return;
  }
  if (cart[name]) {
    cart[name].qty += qty;
  } else {
    cart[name] = { price, qty };
  }
  if (cart[name].qty > stock[name]) {
    alert("Quantity exceeds stock!");
    cart[name].qty = stock[name];
  }
  console.log(cart); // {Chips: {price: 30, qty: 7},Chocolate: {price:10, qty: 3}}
  updateCart();
}

function updateCart() {
  let unordered = "",
    sum = 0;
  for (let i in cart) {
    unordered += `<li>${i} x${cart[i].qty}</li>`;
    sum += cart[i].price * cart[i].qty;
  }
  total = sum;
  document.getElementById("cart").innerHTML = unordered;
  showTotal();
}

function applyDisc() {
  const code = document.getElementById("code").value.toUpperCase();
  discount = code === "SAVE30";
  showTotal();
  if (discount) {
    alert("30% Discount Applied!");
  } else {
    alert("Invalid discount code..");
  }
}

function showTotal() {
  let amt = discount ? total * 0.7 : total;
  document.getElementById("total").textContent = amt.toFixed(2);
}

function pay() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  if (total === 0) {
    alert("No items selected");
    return;
  }
  if (user !== "user" || pass !== "1234") {
    alert("Invalid username or password");
    return;
  }
  const success = Math.random() < 0.9;
  if (success) {
    for (let k in cart) {
      stock[k] -= cart[k].qty;
      if (stock[k] < 0) stock[k] = 0;
      document.getElementById("stock-" + k).textContent = stock[k];
    }
    alert("Payment successful! Products dispatched.");
    for (let k in cart) delete cart[k];
    total = 0;
    discount = false;
    updateCart();
  } else alert("Payment failed!");
}
