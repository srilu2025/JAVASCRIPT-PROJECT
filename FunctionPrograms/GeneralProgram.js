/** Function Declaration with Mandatory and Default Arguments
Scenario: Calculating Discount Price with Default Discount Rate
   I have a function that calculates the discount price of a product.
   If I provide a price of 100, the function applies a default 10% discount and returns 90.
   If I provide a price of 200 and a custom 20% discount, the function returns 160.
   If I don't provide any price, the function should show an error message: "Price is required".
   
   console.log(calculateDiscount(100));      // Output: 90 (Default 10% discount)
   console.log(calculateDiscount(200, 20));  // Output: 160 (20% discount)
   console.log(calculateDiscount());         // Output: "Price is required" */

   function calculateDiscount(price,discount=10){

    if(price===undefined){
        return "price is required";
    }
     return price-(price*(discount/100));

     }

     console.log(calculateDiscount(100));
     console.log(calculateDiscount(200,20));
     console.log(calculateDiscount());