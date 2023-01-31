console.log("javascript file");
var b = 40;
function mylet(){
    // var b = 30;
    if(true){
        let  a = 25;
        console.log(a + "inner of if stetment let-----");
    }
    
    let a = 15;
    console.log(a + "function outer----let---");
}
mylet();
console.log(b + " outer function");
function myvar(){
    var a = 20;
    if(true){
        var a = 30;
        console.log(a + "inner of if stetment var-----");
    }

    console.log(a + "function outer var---");
}
myvar();
function myconst(){
    const a = 10;
    
    if(true){
        const a = 12;
        console.log(a + "inner of if stetment const-----");
    }

    console.log(a + "function outer const---");
}
myconst();



