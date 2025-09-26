function checkVotingEligibility() {
    do {
        // Ask user for name and age
        let name = prompt("Enter your name:");
        let age = prompt("Enter your age:");

        // Convert age to number
        //age = Number(age);

        // Check eligibility
        if (age >= 18) {
            alert("Hello " +name + ", you are eligible to vote.");
        } else {
            alert("Sorry " +name + ", you are not eligible to vote.");
        }

        // Ask if they want to check again
        var again = confirm("Do you want to check again?");
    } while (again);

    // Exit message
    alert("Goodbye!");
}

// Run the program
checkVotingEligibility();
