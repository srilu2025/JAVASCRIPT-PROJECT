/**Scenario: Perform implicit type coercion by adding a number and a string
    Given a user enters "5" as a quantity and a system has a base price of 10
    When the system adds them together
    Then the result should be a string "510" */

    let basePrice=10;

    let quantitiy="5";

    let result=quantitiy+basePrice;

    console.log("the value of the result is..",result)//output is "510"

