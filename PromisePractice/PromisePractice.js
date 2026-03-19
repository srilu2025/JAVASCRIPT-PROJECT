function fetchUser(){

    return new Promise((resolve,reject)=>{
        let flag=false;
        if(flag){
        setTimeout(()=>{
            let user={
                name:'priya',
                role:'QA'
            };
            resolve(user);
        },5000);
    }
    else{
        setTimeout(()=>{
            reject("404 NOT FOUND")
        },2000);
    }

    });
};

fetchUser().then((user)=>{
    console.log(user);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("disconnect with DB");


});



console.log("=======================");

let p1=new Promise((resolve,reject)=>{
    resolve(5);
});

p1.then((n)=>n*2)
.then((n)=>n*3)
.then((result)=>console.log(result));