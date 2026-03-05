//ther eis no dupliacation of the function as it will take  the latest function only
function sample(){

    console.log("i am in sample function");
}

function sample(){

    console.log("i am in the sample 2 function")
}

sample(100);//hoisting happended it will call the below function

function sample(productname){

    console.log("product name is",productname);

}
//sample("macBook");
sample("imac","tom");

//function expression

let test=function addTest(){
    console.log("I am in addTest() method");
    return "done";
}
 let result=test();
 console.log("result is...",result);
console.log(test);
console.log(test());

console.log(test.name);

