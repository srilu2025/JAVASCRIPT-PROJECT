/**Scenario 2: Removing Elements from a Set
Given I have a Set {1, 2, 3, 4, 5, 6}
When I use the method delete() to remove the number '2' from the Set
Then The Set should contain {1, 3, 4, 5, 6}
When I use the method clear() to remove all elements from the Set
Then The Set should be empty {} */

let setValue=new Set([1,2,3,4,5,6]);

setValue.delete(2);
console.log("after deleting value 2 from the set..",setValue);

setValue.clear();
console.log("after removing all values from the set...",setValue);



