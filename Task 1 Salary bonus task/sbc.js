try{
    let salary=+prompt("Enter your salary amount : ");
    if(salary<=0){
        throw("salary cant be zero or negative..")
    }
    if(!salary){
        throw("Salary is mandatory..")
    }
    
    let years =+prompt("Enter your years of experience : ");
    if(years<=0){
        throw("Years of experience cant be zero or negative..")
    }
    if(!years){
        throw("Years of experience is mandatory..");
    }
    
    let bonus;
    
    if(years>5){
        alert("Your Initial salary amount is : "+salary);
        console.log("Your Initial salary amount is : "+salary)
        bonus=salary*0.1;
        salary+=bonus;
        console.log("Your bonus amount is : "+bonus)
        console.log("Your updated salary amount is : "+salary)
        alert("Your bonus amount is : "+bonus);
        alert("Your updated salary amount is : "+salary);
    }else{
        console.log("You are not applicable for bonus and your salary amount is : "+salary)
        alert("You are not applicable for bonus and your salary amount is : "+salary);
    }
}catch(error){
    alert(`Something went wrong: ${error}`)
}