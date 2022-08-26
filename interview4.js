var a = 10;
console.log("line number 2", a)

function fn(){
    console.log("line number 4", a);
    var a = 20;
    a++;
    console.log("line number 7",a)
    if(a){
        var a = 30;
        a++;
        console.log("line number 11",a);
    }
    console.log("line no. 13",a);
}

fn();
console.log("line No 2",a);


/* op--> line number 2 10
line number 4 undefined
line number 7 21
line number 11 31
line no. 13 31
line No 2 10 */