/*/ Anonymous Function
Scenario: Performing Calculations Using an Anonymous Function
   Given I have two numbers, 8 and 4
   When I calculate their product using an anonymous function
   Then the result should be 32 */

  

   const product=function (num1,num2){
 
    return num1*num2;

   }
   console.log(product(8,4));