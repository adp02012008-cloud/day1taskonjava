let std="adp";
let pass=456;

let stdcheck = prompt("Enter Your Name");
if (stdcheck==std)
{
    let passcheck = prompt("Enter Password");
    if (passcheck==pass)
    {
        alert("You logged in succesfully!");
        let age = prompt("Enter Your birth year");
        let date=new Date();
        let year=date.getFullYear();
        let age1=year-age;
        alert("you are "+age1+" years old");
        if (age>=18){
            alert("you are eligible ");
        }
        let time=date.getHours();
        if (time<12){
            alert("good morning!");
        }else if(time>=12&&time<=4){
            alert("Good afternoon!");
        }else{
            alert("Good evening!");
        }
        let num1 = parseInt(prompt("enter any number for mathematical operation :"));
        let num2 = parseInt(prompt("NEXT NUMBER!"));
        alert ("THE ANSWER IS: "+(num1+num2));
        alert ("Dont keep watching the clock, do what it does\n\t\t\t\t\t\t\t\t\t\t-ADP");

    }
}
else
{
    alert("Wrong Credentials!");
}

let studentinfo={
    name:stdcheck,

};


alert(stringify)