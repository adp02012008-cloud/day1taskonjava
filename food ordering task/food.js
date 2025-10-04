// Online Food Ordering System
try {
    // Step 1: Ask for user’s name
    const name = prompt("Enter your name:");

    if (!name) {
        alert("Name not entered. Exiting...");
        throw "Name not entered";
    }

    // Step 2: Confirm order
    const wantsToOrder = confirm(`Hello ${name}! Do you want to order food?`);
    if (!wantsToOrder) {
        alert("Goodbye! See you next time!");
        throw "Order cancelled";
    }

    // Step 3: Display menu
    const menu = {
        1: { item: "Pizza", price: 150 },
        2: { item: "Burger", price: 100 },
        3: { item: "Sandwich", price: 80 }
    };

    let menuText = "Menu:\n";
    for (let key in menu) {
        menuText += `${key}= ${menu[key].item} (₹${menu[key].price})\n`;
    }

    const choice = prompt(menuText + "\nEnter the number of your choice:");
    const selected = menu[choice];

    if (!selected) {
        alert("Invalid choice!");
        throw "Invalid choice";
    }

    // Step 4: Ask for quantity
    const quantity = +prompt(`Enter quantity for ${selected.item}:`);

    if (isNaN(quantity) || quantity < 1) {
        alert("Invalid quantity!");
        throw "Invalid quantity";
    }

    // Step 5: Process the bill using Promise
    const total = selected.price * quantity;

    const processBill = new Promise((resolve, reject) => {
        if (total > 0) {
            resolve(`You ordered ${quantity} ${selected.item}(s). Total = ₹${total}`);
        } else {
            reject("Error calculating bill!");
        }
    });

    // Step 6: Show the result
    processBill
        .then(message => alert(message))
        .catch(error => alert(error));

} catch (error) {
    // Step 7: Error handling
    alert(`Something went wrong: ${error}`);
}