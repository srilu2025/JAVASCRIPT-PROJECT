//Cb is a simple function passed as an argument to another function

function greet(){
 console.log("Hi Good morning");
}
let variable=function(name,callback){

    console.log(name);
    callback();
}

variable("srilu",greet);

console.log("==================");

let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let mul=(a,b)=>a*b;
let div=(a,b)=>a/b;


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {*} callback 
 */
function calculator(a,b,callback){
    console.log("going to call the callback function");
   return callback(a,b);

}
let res=calculator(20,10,add)
console.log(res);

 res=calculator(20,10,sub)
console.log(res);

res=calculator(20,10,mul)
console.log(res);

res=calculator(20,10,div)
console.log(res);



//can i do the callback without arrow functions--yes


console.log("==================");
//passing whole function as the Argument

function myCalcy(a,b,callback){
      return callback(a,b);
}
let test=myCalcy(10,20,(a,b)=>a+b);//passing whole function as the Argument
console.log(test);

console.log("==================");

function launchBrowser(browserName,callback){
    return callback(browserName);
}
let flag=launchBrowser('chrome',);
if(flag){
    console.log("enter the url");
}

let num=[1,2,3,4,5];
num.forEach(e=>console.log(e));

let num1=num.filter(e=>e>3);
console.log(num1);



