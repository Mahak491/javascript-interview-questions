//imperative Vs declarative


//this is a imperative way to write code
const x = 5;

const xSquared = x*x;

let iseven;

if(xSquared % 2 === 0){
    iseven = true;
}
else{
    iseven = false;
}

console.log(iseven)


//declarative way for same code

const isSquareEven = (x) => ((x*x) % 2 === 0 ? true : false) 
console.log(isSquareEven())


//thats why for functional programming we use declarative way
