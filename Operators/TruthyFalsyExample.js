/**Feature: Truthy and Falsy Values in JavaScript

  Scenario: Check if a value is truthy or falsy using an if statement
    Given a variable with value 0
    When I check its truthiness in an if statement
    Then it should be considered falsy
 */

    let variable=0;
     //let phoneNumber=null;

    if(variable){
        console.log("value is truthy");
    }
    else{
        console.log("value is falsy");
    }