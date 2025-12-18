/***Scenario: Create a new array with each element doubled using map()
    Given an array [1, 2, 3]
    When I use map() to double each element
    Then I should get [2, 4, 6]

  Scenario: Filter even numbers from an array using filter()
    Given an array [1, 2, 3, 4, 5]
    When I use filter() to get even numbers
    Then I should get [2, 4]

  Scenario: Find the sum of all elements in an array using reduce()
    Given an array [1, 2, 3, 4]
    When I use reduce() to find the sum
    Then I should get 10 */


    //using map
    let array1=[1,2,3];

   const newArray= array1.map(n=>n+n);
   console.log("new array after doubled..",newArray)

   //using filter
   let array2=[1,2,3,4,5];

   const newArray1=array2.filter(n=>n%2===0);

console.log("array of even numbers..",newArray1);

let array3=[1,2,3,4];

//sum of the values in array
const newArray2=array3.reduce((acc,a)=>acc+a);
console.log("reduced value is",newArray2);

//product of the values in array
const newArray3=array3.reduce((acc,a)=>acc*a,1);
console.log(newArray3);