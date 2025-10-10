try{

    let amount=+prompt("Enter Your Bill Amount : ");
    if(amount<=0){
        throw("Bill cant be zero or negative..")
    }
    if(!amount){
        throw("Bill Amount cant be empty..");
    }
    

    let discount;
    if(amount>500){
        console.log("Initial amount: "+ amount);
        alert("Your initial bill is: "+amount);
        discount=amount*0.2;
        amount-=discount;
        console.log("Discount amount: "+ discount);
        console.log("Final payable amount: "+ amount);
        alert("Your discount amount is : "+discount);
        alert("Your final amount payable is :"+amount);
        
    }else{
        console.log("Initial amount: "+ amount);
        alert("Your initial bill is: "+amount);
        discount=amount*0.1;
        amount-=discount;
        console.log("Discount amount: "+ discount);
        console.log("Final payable amount: "+ amount);
        alert("Your discount amount is : "+discount);
        alert("Your final amount payable is :"+amount);
    }



}catch(error){
    alert(`Something went wrong : ${error}`);
}