function a(){
    var b = 10;
    c();
    function c(){
        console.log(b); //lexical scope
    }
}

//c is present inside a. so, if c() will not get b variable then it will search in a() which is c()'s parent
a();