
// 1.start the coffee machine
// 2.ground the coffee beans
// 3.boil the water
// 4.brew the coffee
// 5.coffee is ready

function machineStart(callback){
    setTimeout(()=>{
        console.log("start the machine")
        groundCoffeBeans();
    },5000);
}

function groundCoffeBeans(callback){
    setTimeout(()=>{
        console.log("ground the coffee beans")
        boilWater();
    },3000);
}

function boilWater(callback){
    setTimeout(()=>{
        console.log("boil the water")
        brewCoffee();
    },2000);
}

function brewCoffee(callback){
    setTimeout(()=>{
        console.log("brew the coffee")
        coffeeReady();
    },4000);
}
function coffeeReady(){
    setTimeout(()=>{
        console.log("coffee is ready")
    },3000);
}

machineStart();