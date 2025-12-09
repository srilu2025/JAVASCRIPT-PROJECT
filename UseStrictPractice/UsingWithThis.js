 
 /**Scenario: Change the behavior of 'this' inside a function
    Given strict mode is enabled inside a JavaScript function
    When I call the function in a normal way (not as an object method)
    Then the value of 'this' should be "undefined" instead of the global object */
 
 function method(){

   "use strict"
    console.log(this);
 }
 method();
