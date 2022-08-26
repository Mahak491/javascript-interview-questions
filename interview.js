console.log("varname",varname);
var varname;
varname = "cp";

fn();

function fn(){
    console.log("i am function");
}

fn();

fncontainer();

function fncontainer(){
    console.log("i am function conatiner");
}

fncontainer();


/*ans -> varname undefined
i am function
i am function
i am function conatiner
i am function conatiner */
