function startMachine(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("mechine started");
             resolve();
         },5000)
    })
}

function grindCoffeeBeans(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("grind beans");
             resolve();
         },3000)
    })
}
function boilingWater(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("boil water");
             resolve();
         },2000)
    })
}
function brewCoffee(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("brewing the coffee");
             resolve();
         },3000)
    })
}
function pourCoffee(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("Pouring coffee into cup");
             resolve();
         },1000)
    })
}

startMachine()
          .then(()=>grindCoffeeBeans())
             .then(()=>boilingWater())
                .then(()=>brewCoffee())
                  .then(()=>pourCoffee())
                  .then(()=>{
                    console.log("coffee is ready");
                  })
        .finally(()=>{
            console.log("start the work after refreshment");
        })