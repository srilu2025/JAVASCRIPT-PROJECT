/**Scenario: Adding a new property to an object
    Given I have an object:
    
    const person = { name: "John Doe", age: 30 };
    
    When I add a new property "city" with the value "New York"
    Then the object should contain the property "city" with value "New York"
 */

  const person = { 
    name: "John Doe", 
    age: 30 
};  

person.city="New York";

console.log("then the key and values of the person object is..",person);