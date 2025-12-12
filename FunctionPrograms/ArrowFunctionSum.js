/**Scenario: Arrow Function
   Given I have two numbers 4 and 6
   When I calculate their sum using an arrow function
   Then the result should be 10
 */

   let num1=4;

   let num2=6;

   const addition= ()=>

    console.log("adding two numbers are..",num1+num2);
   
addition();