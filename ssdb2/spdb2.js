// Global array of motivational quotes (Task 5)
const motivationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive for progress, not perfection."
];

// --- Core Function: Process and Display Student Info ---
function processStudentInfo() {
    // 1. Get input values (Variables & Data Types, DOM Manipulation)
    const name = document.getElementById('name').value.trim();
    const birthYearInput = document.getElementById('birthYear').value;
    const city = document.getElementById('city').value.trim();
    const errorMessageDiv = document.getElementById('error-message');
    
    // Clear previous error message
    errorMessageDiv.textContent = '';
    
    // 7. Handle Errors Gracefully (Errors)
    if (!name || !birthYearInput || !city) {
        errorMessageDiv.textContent = 'Error: All fields must be filled out.';
        return;
    }

    const birthYear = parseInt(birthYearInput);
    const currentYear = new Date().getFullYear();
    
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        errorMessageDiv.textContent = 'Error: Please enter a valid birth year.';
        return;
    }

    // --- Calculations ---

    // 2. Calculate Age and Eligibility (Date(), Numbers & Math, If-Else)
    const age = currentYear - birthYear;
    const isEligible = age >= 18; // Boolean variable (Data Types)

    // --- Display Outputs ---

    // 3. Show Personalized Greeting (Strings, Date(), If-Else, DOM Manipulation)
    displayGreeting(name);

    // 2. Display Age and Eligibility (Strings, If-Else, DOM Manipulation)
    const eligibilityMessage = isEligible ? 'Eligible to vote/sign contracts (18+).' : 'Not yet eligible (under 18).';
    document.getElementById('age-and-eligibility').textContent = 
        `${name}, you are ${age} years old. Status: ${eligibilityMessage}`;

    // 5. Display a Random Motivational Quote (Numbers & Math, Strings, DOM Manipulation)
    displayRandomQuote();

    // 6. View Info Stored in JSON Format (JSON, Strings, DOM Manipulation)
    displayStudentJSON(name, age, city, isEligible);
}

// --- Helper Functions ---

// Task 3: Personalized Greeting
function displayGreeting(name) {
    const hour = new Date().getHours(); // Date()
    let timeOfDay;

    // If-Else for time-based greeting
    if (hour < 12) {
        timeOfDay = 'Good morning';
    } else if (hour < 18) {
        timeOfDay = 'Good afternoon';
    } else {
        timeOfDay = 'Good evening';
    }

    document.getElementById('greeting').textContent = `${timeOfDay}, ${name}! Welcome to your dashboard.`;
}

// Task 5: Random Motivational Quote
function displayRandomQuote() {
    // Basic arithmetic to get a random index
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    document.getElementById('quote-display').textContent = `Quote for the day: "${motivationalQuotes[randomIndex]}"`;
}

// Task 6: View Info Stored in JSON Format
function displayStudentJSON(name, age, city, isEligible) {
    // Create an object
    const studentInfo = {
        name: name,
        age: age,
        city: city,
        isEligible: isEligible,
        timestamp: new Date().toISOString()
    };
    
    // Convert the JavaScript object into a JSON string
    // JSON.stringify(object, replacer, space)
    const jsonString = JSON.stringify(studentInfo, null, 2); 

    // Display the JSON string
    document.getElementById('json-output').textContent = jsonString;
}

// Task 4: Basic Math Operations
function performMath() {
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;
    const mathResultDiv = document.getElementById('math-result');

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    // 7. Handle errors (invalid numbers)
    if (isNaN(num1) || isNaN(num2)) {
        mathResultDiv.textContent = 'Error: Please enter valid numbers for the math operation.';
        return;
    }

    // Basic math operation (addition)
    const result = num1 + num2;

    // Display result
    mathResultDiv.textContent = `Result of ${num1} + ${num2} is: ${result}`;
}