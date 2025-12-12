/**Scenario: Calculating Total Bill with Tax Using an Arrow Function
   Given I have a product price of 100
   When I calculate the total bill including a 0.1 tax using an arrow function
   Then the result should be 110

   // Test cases
   console.log(calculateTotalBill(100));    // Output: 110 (Default tax 10%)
   console.log(calculateTotalBill(200, 0.2)); // Output: 240 (20% tax)
 */

   let price=100;
   

  const calculateTotalBill= (price,tax=0.1)=>{
  
      return price+(price*tax);
       
   }

   console.log(calculateTotalBill(100));

   console.log(calculateTotalBill(200,0.2));
    