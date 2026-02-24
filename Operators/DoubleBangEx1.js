/**Scenario: Convert a falsy value to true using logical NOT (!)
    Given a variable with value ""
    When I apply the logical NOT operator twice (!!)
    Then it should return false
 */



    let variable="";
     let phoneNumber=null;

    console.log(!variable);//applying (!) once
    
    console.log(!!variable);//applying (!!) twice


       console.log(!phoneNumber);//applying (!) once

           console.log(!!variable);//applying (!!) once

/** Scenario: Provide a default value using the logical OR (||) operator
    Given a variable with value null
    When I use the logical OR operator with "default"
    Then the result should be "default" */

    let var1=null || "default";

    console.log("the result is",var1);

/**Scenario: Use the logical AND (&&) operator with a truthy value
    Given a variable with value 10
    When I use the logical AND operator with "valid"
    Then the result should be "valid" */

    // logical AND (&&)--if all values arev true then will return last true value,if any values are
    // false will returns the first false vale
    
    let var2=10 && "valid" && "";

    console.log("the result is..",var2);

 /**Scenario: Filter out falsy values from an array using filter()
    Given an array [0, 1, "", null, "hello", undefined, false]
    When I filter out falsy values using filter()
    Then the result should be [1, "hello"] */
    
    let array1=[0, 1, "", null, "hello", undefined, false];

    console.log(array1.filter(Boolean));

    /**Scenario: Check if an empty string ("") is falsy in a conditional statement
    Given a variable with value ""
    When I check its truthiness in an if statement
    Then it should be considered falsy */

    let value="";

    if(value){
        console.log("truthy");
    }
    else{
        console.log("falsy");
    }

    /**Scenario: Use the nullish coalescing operator (??) to handle null and undefined
    Given a variable with value undefined
    When I use the nullish coalescing operator with "fallback"
    Then the result should be "fallback" */

    let value1;

    let result=value1 ?? "fallback";

    console.log("then the value must be..",result);

/**Scenario: Compare undefined, null, 0, NaN, and "" to see their falsy behavior
    Given different falsy values [undefined, null, 0, NaN, ""]
    When I check their truthiness
    Then they should all be considered falsy */

    let value2=[undefined, null, 0, NaN, "",10,"hello"];

    value2.forEach((i)=>{
 
        if(!i){
        console.log(`${i} is false`);
    }else{
        console.log(`${i} is true`)
    }

    })

    let x = (5, 10, 15);
    console.log(x);

    