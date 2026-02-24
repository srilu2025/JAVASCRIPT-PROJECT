/***Feature: JavaScript Object Manipulation

  Scenario: Defining an object with properties
    Given I create an object with:
    
    const person = { name: "John Doe", age: 30, isEmployed: true };
    
    When I access the "name" property using dot notation
    Then I should get "John Doe"
    When I access the "age" property using bracket notation
    Then I should get 30 */

    let person={ 
        
        name: "John Doe", 
        age: 30, 
        isEmployed: true
     };

     console.log("accessing the name property..",person.name);
     console.log("accessing the age property..",person["age"]);