//Callback is passing one function as a argumnt to an another function

function browserInit(callback){

   console.log("initiating the browser...."); 
   callback();
}

function tearDown(){

    console.log("closing the browser....");
}

browserInit(tearDown);

