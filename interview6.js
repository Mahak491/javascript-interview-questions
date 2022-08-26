//impure func and pure func

let a = 9;

function addNum(b){
    console.log("the sum is",a+b)
}

addNum(2);

//this is an impure function because it depends in external factor that is "a" here even though we pass same argument but it will give different results.


//pure func

function addNumber(a,b){
    console.log("the sum is",a+b);//side effect
    //in this program there is side effect cuz of console so to avoid that effect prefer
    return a+b; //no side effect
}
addNumber(2,3);



function addNumber(a,b){
    return a+b; //no side effect
}

console.log(addNumber(2,3));