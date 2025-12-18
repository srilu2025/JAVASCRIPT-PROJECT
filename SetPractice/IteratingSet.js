/**Scenario 4: Iterating Over a Set
Given I have a Set {1, 2, 3, 4, 5, 6}
When I use the method forEach() to iterate over the Set
Then Each element should be printed: 1, 2, 3, 4, 5, 6 */

let set1=new Set([1,2,3,4,5,6]);

set1.forEach((value)=>console.log(value));