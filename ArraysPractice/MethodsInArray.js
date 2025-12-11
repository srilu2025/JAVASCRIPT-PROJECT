/**Feature: Array Methods in JavaScript

  Scenario: Add a number to the end of an array using push()
    Given an array [1, 2, 3]
    When I add 4 to the end using push()
    Then the array should be [1, 2, 3, 4] */


    const numbers=[1,2,3];
    
    console.log("after adding number to an array",numbers.push(4));
    console.log("elements after adding the number in an array is",numbers);

   /**Scenario: Remove the last element from an array using pop()
    Given an array ["a", "b", "c"]
    When I remove the last element using pop()
    Then the array should be ["a", "b"]
 */ 

    const stringValues=["a","b","c"];

    console.log("removing the last character from array.. ",stringValues.pop(stringValues));
    console.log("array after removing the element from last..",stringValues);

    /**Scenario: Remove the first element from an array using shift()
    Given an array [10, 20, 30]
    When I remove the first element using shift()
    Then the array should be [20, 30] */

    const numbers1=[10,20,30];

    console.log("removing the first element using shift()",numbers1.shift());
    console.log("array after removing the 10 ",numbers1);

    /**Scenario: Add an element to the beginning of an array using unshift()
    Given an array ["x", "y"]
    When I add "z" to the beginning using unshift()
    Then the array should be ["z", "x", "y"] */

    let strValues1=["x","y","z"];
    console.log("adding the value at first using unshift()",strValues1.unshift('a'));//returns the length of an array,and adds value
    console.log("after adding the value a at first is..",strValues1);

/**Scenario: Merge two arrays using concat()
    Given two arrays [1, 2] and [3, 4]
    When I merge them using concat()
    Then I should get [1, 2, 3, 4] */

    let array1=[1,2];
    let array2=[3,4];

    console.log("merging the array1 and array2",array1.concat(array2));
    console.log("after merging the array is..",)

    /**Scenario: Extract a portion of an array using slice()
    Given an array [5, 6, 7, 8, 9]
    When I extract elements from index 1 to 3 using slice()
    Then I should get [6, 7]
 */

    let numbers2=[5,6,7,8,9];

    console.log("getting the portion from index",numbers2.slice(1,3));
    console.log("after slicing the numbers from array",numbers2)

  /**Scenario: Remove and insert elements using splice()
    Given an array ["a", "b", "c", "d"]
    When I remove "b" and "c" and insert "x", "y" using splice()
    Then the array should be ["a", "x", "y", "d"] */  

    let strValues2=["a","b","c","d"];

    console.log("applying the splice method",strValues2.splice(0,3,"z"));

    console.log("then the array is",strValues2);

    /**Scenario: Find the first index of an element using indexOf()
    Given an array ["apple", "banana", "apple"]
    When I find the index of "apple" using indexOf()
    Then I should get 0 */

    let strValues3=["apple","banana","apple"];
     
    console.log("finding indexOf apple is...",strValues3.indexOf("apple"));
        console.log("finding indexOf mango is...",strValues3.indexOf("mango"));

  /**Scenario: Find the last occurrence of an element using lastIndexOf()
    Given an array ["cat", "dog", "cat"]
    When I find the last index of "cat" using lastIndexOf()
    Then I should get 2 */
    let pets=["cat","dog","cat","bird","cat"];
    
    console.log("find the last index of cat using lastIndexOf()",pets.lastIndexOf("cat"));

    /**Scenario: Check if an array contains an element using includes()
    Given an array [1, 2, 3, 4]
    When I check if it includes 3
    Then it should return true
 */

    let arrayNum=[1,2,3,4];
    console.log("checking if number 3 is included in array",arrayNum.includes(3));
        console.log("checking if number 3 is included in array",arrayNum.includes(5));

  /** Scenario: Iterate over an array and multiply each element by 2 using forEach()
    Given an array [1, 2, 3]
    When I iterate over it using forEach() and multiply each element by 2
    Then I should get [2, 4, 6] */
    
   let numArray=[1,2,3];
   let numArray1=[];
   numArray.forEach(function(value){

         numArray1.push(value*2);

         })
console.log(numArray1);

/**Scenario: Sort an array in ascending order using sort()
    Given an array [3, 1, 4, 2]
    When I sort it using sort()
    Then I should get [1, 2, 3, 4]
 */

    let arr=[3,1,4,2];

    console.log("sorting an array...",arr.sort());

    /**Scenario: Reverse the elements of an array using reverse()
    Given an array ["a", "b", "c"]
    When I reverse it using reverse()
    Then I should get ["c", "b", "a"] */

    let alpha=["a","b","c"];
    console.log("reversing an array..",alpha.reverse());









