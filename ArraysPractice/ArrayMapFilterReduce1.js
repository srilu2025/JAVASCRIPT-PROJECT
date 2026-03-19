let numbers=[1,2,3,4,5,6,7,8,9,10];

let finalNum=numbers.filter(e=>e%2===0)
.map(e=>e*e)
.reduce((num,e)=>num+e,0);
console.log(finalNum);

let sample=[1,2,3,4,5,6];

let lengthSize=sample.map(e=>e+2);
console.log(lengthSize);

let filterSize=sample.filter(e=>e>2);
console.log(filterSize);

let reduceSize=sample.reduce((initialNum,e)=>initialNum+e,0);
console.log(reduceSize);



let reduceSize1=sample.reduce((e,initialNum)=>initialNum+e,0);
console.log(reduceSize1);


