/**Compare two numbers using strict equality (===) and loose equality (==).
 * 
 * Feature: Equality Comparison in JavaScript

  Scenario: Compare two numbers using strict and loose equality
    Given two numbers 5 and "5"
    When I compare them using loose equality (==)
    Then the result should be true
    When I compare them using strict equality (===)
    Then the result should be false
 */

    let number1=5;

    let number2="5";

    console.log("comparing the 2 numbers with ==",number1==number2);

    console.log("comparing the 2 numbers with ===",number1===number2);

    