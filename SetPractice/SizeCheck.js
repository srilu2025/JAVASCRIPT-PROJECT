/**Scenario 3: Checking the Size of a Set
Given I have a Set {1, 2, 3, 4, 5, 6}
When I use the size property to check the size of the Set
Then The size should be 6
Given I have an empty Set
When I use the size property to check the size of the Set
Then The size should be 0 */

let setValue=new Set([1,2,3,4,5,6]);

console.log("size of the set is..",setValue.size);

let setValue2=new Set();
console.log("size of setValue2 is",setValue2.size);

