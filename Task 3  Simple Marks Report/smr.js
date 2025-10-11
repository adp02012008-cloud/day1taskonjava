try{
    let sub1=+prompt("Enter your 1st subject mark : ");
    if(sub1<0||sub1>100){
        throw("Subject mark cant be negative and more than 100..")
    }
    if(!sub1){
        throw("Sunject mark is mandatory..")
    }


    let sub2=+prompt("Enter your 2nd subject mark : ");
    if(sub2<0||sub2>100){
        throw("Subject mark cant be negative and more than 100..")
    }
    if(!sub2){
        throw("Sunject mark is mandatory..")
    }


    let sub3=+prompt("Enter your 3rd subject mark : ");
    if(sub3<0||sub3>100){
        throw("Subject mark cant be negative and more than 100..")
    }
    if(!sub3){
        throw("Sunject mark is mandatory..")
    }


    let sub4=+prompt("Enter your 4th subject mark : ");
    if(sub4<0||sub4>100){
        throw("Subject mark cant be negative and more than 100..")
    }
    if(!sub4){
        throw("Sunject mark is mandatory..")
    }


    let sub5=+prompt("Enter your 5th subject mark : ");
    if(sub5<0&&sub5>100){
        throw("Subject mark cant be negative and more than 100..")
    }
    if(!sub5){
        throw("Sunject mark is mandatory..")
    }

    let total=sub1+sub2+sub3+sub4+sub5;
    alert("Your total mark for 5 subject is : "+total);

    let average=total/5;
    alert("Your average mark is : "+average);

    let grade;
    if(average>=90){
        grade="Grade = A"
        alert("Your grade is : A");
    }else if(average>=75){
        grade="Grade = B"
        alert("Your Grade is : B");
    }else if(average>=50){
        grade="Grade = C"
        alert("Your Grade is : C");
    }else{
        grade="Grade = Fail"
        alert("You are Fail..");
    }
    
}catch(error){
    alert(`Something went wrong : ${error}`);
}