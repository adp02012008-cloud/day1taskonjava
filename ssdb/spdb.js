(function runDashboard() {
    let studentInfo = {};
    const currentYear = new Date().getFullYear();
    
    // Helper functions (simplified for prompt/alert environment)
    const promptInput = (message) => prompt(message)?.trim() ?? '';
    const alertOutput = (title, message) => alert(`${title}:\n\n${message}`);

    // --- 3. Personalized Greeting ---
    function getGreeting() {
        const hour = new Date().getHours();
        const timeOfDay = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening';
        const name = studentInfo.name ? studentInfo.name.split(' ')[0] : 'there';
        return `Good ${timeOfDay}, ${name}!`;
    }

    // --- 5. Random Motivational Quote ---
    function getQuote() {
        const quotes = [
            "Be the change you wish to see.", "Keep going.", 
            "Today is your day.", "Never stop learning.", 
            "Small steps, big results."
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // --- Main Logic Flow ---
    

    // --- 1, 2, 6, 7: Profile, Age, JSON, Errors ---
    function saveProfile() {
        const name = promptInput("1. Enter your Full Name:");
        const yearInput = promptInput("2. Enter your Birth Year (e.g., 2000):");
        const city = promptInput("3. Enter your City:");
        const birthYear = parseInt(yearInput);

        const isValid = name && yearInput && city && !isNaN(birthYear) && birthYear >= 1900 && birthYear <= currentYear;
        
        if (!isValid) {
            return "Error: Profile data is invalid or incomplete. Cannot proceed.";
        }

        studentInfo = { name, birthYear, city };
        const age = currentYear - birthYear;
        const isEligible = age >= 18;

        let profileResult = `Profile Saved for ${name} from ${city}.\n`;
        profileResult += `Age: ${age}\n`;
        profileResult += `Eligible (18+): ${isEligible ? 'Yes' : 'No'}\n\n`;
        profileResult += `JSON Data:\n${JSON.stringify(studentInfo, null, 2)}`;
        
        return profileResult;
    }
    
    alertOutput("Profile Setup", saveProfile());

    // --- 4 & 7. Basic Calculator ---
    function calculate() {
        const num1 = parseFloat(promptInput("Calculator: Enter the first number:"));
        const num2 = parseFloat(promptInput("Calculator: Enter the second number:"));
        const operation = promptInput("Calculator: Enter the operation (+, -, *, /):");

        try {
            if (isNaN(num1) || isNaN(num2)) throw new Error('Please enter valid numbers.');
            
            let result;
            switch (operation) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': 
                    if (num2 === 0) throw new Error('Cannot divide by zero.');
                    result = num1 / num2; 
                    break;
                default: throw new Error('Invalid operation.');
            }
            return `Result of ${num1} ${operation} ${num2}: ${result.toFixed(2)}`;

        } catch (e) {
            return `Calculator Error: ${e.message}`;
        }
    }
    
    alertOutput("Calculator", calculate());

    // --- 5. Display Quote ---
    alertOutput("Motivational Quote", getQuote());

})(); // Immediately Invoked Function Expression (IIFE)