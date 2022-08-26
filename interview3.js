console.log("line 1",varName);
var varName = 10;

function b(){
    console.log("line 5",varName); // lexical scope
}
console.log("line 2",varName);

function fn(){
    console.log("line 3",varName);

    var varName = 20;

    b();
    console.log("line 4",varName);
}

fn();

/* output --> line 1 undefined
line 2 10
line 3 undefined
line 5 10
line 4 20 */