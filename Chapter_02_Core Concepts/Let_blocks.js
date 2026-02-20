let a = "Pramod";

if(true){
    console.log(a); //local varaible , TDZ
    let a = "temp";
}

var ab = "Pramod";

if(true){
    console.log(b);
    var b = "temp";
    console.log(b);
}


let c = 10
console.log(c)
if (true){ 
    console.log(a); //TDZ
    let c = 20;
}