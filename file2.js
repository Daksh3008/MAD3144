//debugging to see variable value

var zebra = 0;
function a(c){
    console.log(zebra); 
    b();
}

function b(){
    zebra++;
    a(b())
}
a()