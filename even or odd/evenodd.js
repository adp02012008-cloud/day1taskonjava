console.log("EVEN OR ODD DAY MESSSAGE");

//STRING INPUT  
let StringNumber="10";

//CONVERSION TO NUMBER
let num=Number(StringNumber);

switch(num%2){
    case 0:
        console.log("Even Day");
        break;

    case 1:
        console.log("Odd Day");
        break;

    default:
        console.log("Invalid input");
}