/**Feature: Types of Functions in JavaScript

// Function Declaration with No Argument
Scenario: Generating a random number using a function declaration     
   Given I have a function that generates a random number between 1 and 100
   When I call the function without any argument
   Then I should get a random number between 1 and 100

   Math.floor(Math.random() * 100) + 1 */

   function method(){

        console.log("random number is....",Math.floor(Math.random() * 100) + 1);

   }

   method();