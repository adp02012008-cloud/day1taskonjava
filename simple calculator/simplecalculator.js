console.log("SIMPLE CALCULATOR");
console.log("Enter Your Input:");
let string1=+prompt("ENter 1 no :");
let string2=+prompt("Enter 2nd no: ");


num1=Number(string1);
num2=Number(string2);

let op=prompt("Enter the operation to be performed + - * /: ");

switch(op){
    case '+':
        let a=num1+num2;
        console.log("num1 + num2 = ",a);
        break;
    case '-':
        let s=num1-num2;
        console.log("num1-num2 = ",s);
        break;
    case '*':
        let m=num1*num2;
        console.log("num1*num2 = ",m);
        break;
    case '/':
        let d=num1/num2;
        console.log("num1/num2 = ",d);
        break;
    default:
        console.log("Invalid Input");
}
