/**Scenario: Check if at least one element is greater than 10 using some()
    Given an array [5, 15, 3]
    When I check if any element is greater than 10 using some()
    Then it should return true

  Scenario: Verify if all elements are positive using every()
    Given an array [1, 2, 3, 4]
    When I check if all elements are positive using every()
    Then it should return true

  Scenario: Return the first number greater than 5 using find()
    Given an array [1, 4, 6, 8]
    When I find the first number greater than 5 using find()
    Then I should get 6 */

    //using some()
    let array=[5,15,3];
   const value= array.some(n=>n>10);
   console.log("array containg the element greater than 10 is...",value);

   //using every()
   let array1=[1,2,3,4];
   const positiveValues=array1.every(n=>n>0);
   console.log("array containg all positive values...",positiveValues);

   //using find()
   let array2=[1,4,6,8];
   const firstBigValue1=array2.find(n=>n>8);
   console.log("finding the first greater number above 5 is ..",firstBigValue1);