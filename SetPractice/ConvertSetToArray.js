/**Scenario 5: Converting a Set to an Array
Given I have a Set {1, 2, 3, 4, 5, 6}
When I use Array.from() or the spread operator (...) to convert the Set to an array
Then The result should be [1, 2, 3, 4, 5, 6] */

let setName=new Set([1,2,3,4,5,6]);

console.log("Converting Set to Array...",Array.from(setName));