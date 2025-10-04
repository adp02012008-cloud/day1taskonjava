function librarySystem() {
    // Step 1: Ask for username and password
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    if (username === "library" && password === "book123") {
        // Successful login
        let borrow = confirm("Do you want to borrow a book?");

        if (borrow) {
            // Step 3: Ask for book category
            let category = prompt("Enter book category:\n1 = Fiction\n2 = Science\n3 = History\n4 = abc");

            // Convert to number
            category = Number(category);

            // Step 4: Use switch
            switch (category) {
                case 1:
                    alert("You selected Fiction");
                    break;
                case 2:
                    alert("You selected Science");
                    break;
                case 3:
                    alert("You selected History");
                    break;
                case 4:
                    alert("You selected abc")
                    break;
                default:
                    alert("Invalid category!");
            }
        } else {
            // Step 5: User clicked Cancel
            alert("Maybe next time! Goodbye!");
        }
    } else {
        // Invalid login
        alert("Invalid login!");
    }
}

// Run the function
librarySystem();
