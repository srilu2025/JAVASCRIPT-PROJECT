let customerType="Premium";

let totalPurchaseAmnt=150;

let discount=0;

if(customerType==="Premium"){

    if(totalPurchaseAmnt>100){
        discount=20;
    }else{
        discount=10;
    }
}else if(customerType==="Regular"){
   if(totalPurchaseAmnt>100){
        discount=5;
    }else{
        discount=0;
    }
}
    

console.log("Discount :",discount,"%");

