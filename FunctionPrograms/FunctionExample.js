/**task:
  1. sum(defaultparameter, paramtert)

  2. sum(p1,p1,dp)

     sum(10)
  3. sum(...a)- string value*/


//task=1
  function sum(a,b=20){

    console.log("sum of the a and b is...",a+b);

}
sum(30);//here 30 will be assigned to a

//task =2.
function sum1(a,b,c=40){
 
    console.log("sum of values are..",a+b+c);//the number  10 will be assigned to a,and b is not defined so NaN ,c=40

}
sum1(10);//10 will go to the 'a'

//task=3
function sum2(...a){

    console.log("sum of values in Rest operators are..",a);
}
sum2("a","b","c");

