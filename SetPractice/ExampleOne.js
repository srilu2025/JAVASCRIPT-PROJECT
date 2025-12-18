/***1. Working with JavaScript Set
Scenario 1: Creating and Adding Elements to a Set
Given I have an empty Set
When I use the method add() to add the numbers '1', '2', '3', '4', '5' to the Set
Then The Set should contain {1, 2, 3, 4, 5}
When I use the method add() again to add the number '6' to the Set
Then The Set should contain {1, 2, 3, 4, 5, 6} */


let setName=new Set();

setName.add(1);
setName.add(2);
setName.add(3);
setName.add(4);
setName.add(5);

console.log("values in the set are...",setName);
setName.add(6);
console.log("added value is",setName);