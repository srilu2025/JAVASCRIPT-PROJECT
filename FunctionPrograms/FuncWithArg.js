/** Function Declaration with an Argument
Scenario: Calculating the area of a rectangle using a function declaration 
   Given I have a function that calculates the area of a rectangle
   When I provide the length as 10 and the width as 5
   Then the function should return 50

   length * width; */

   function areaOfRectangle(length,width){

       return length*width;
   }

   let rectangleLength=areaOfRectangle(10,5);

   console.log("area of the rectangle is...",rectangleLength);