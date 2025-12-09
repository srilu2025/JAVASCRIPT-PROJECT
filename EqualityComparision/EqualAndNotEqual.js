/**Scenario: Use != and !== to compare different data types
    Given a number 10 and a string "10"
    When I compare them using !=
    Then the result should be false
    When I compare them using !==
    Then the result should be true */


    let number1=10;

    let stringVal="10";

    console.log("comparing two variable using !=",number1!=stringVal);//false

    console.log("comparing two variables using !==",number1!==stringVal);//true