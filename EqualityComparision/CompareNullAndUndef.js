/**Scenario: Compare null and undefined using equality operators
    Given two values null and undefined
    When I compare them using ==
    Then the result should be true
    When I compare them using ===
    Then the result should be false
 */

    let val1=null;//explicitly assigned dafault value null

    let val2;//internally will take the value undefined

    //both are default values in the javascript

    console.log("comparing val1 and val2 using ==..",val1==val2);//true

    console.log("comparing val1 and val2 using ===.. ",val1===val2);//false

    console.log(typeof val1,typeof val2);

