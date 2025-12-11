let cars=["mini","BMw","Benz","volvo"];

//using the "for in" loop iterating

for(let car in cars){

    console.log(car,cars[car]);
}


//iterating using the "for each"

//anonymous function
cars.forEach(function(index,value){

    console.log(index,value);
})

//arrow function

cars.forEach((index,value)=>{

  console.log(index,value)

})


