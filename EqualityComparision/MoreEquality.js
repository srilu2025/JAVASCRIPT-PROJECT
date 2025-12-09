/**Scenario: Demonstrate how equality comparison works in an if statement
    Given a variable with value "5"
    When I use it in an if statement with condition (value == 5)
    Then the condition should evaluate to true
    When I use it with strict comparison (value === 5)
    Then the condition should evaluate to false */

    let value="5";

    if(value==5){
       console.log("valu is 5");
    }

     if(value===5){
        console.log("value is 5 ")
     }
     else {
        console.log("value is 5 but type is different")
     }

     
    