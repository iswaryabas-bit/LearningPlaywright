

console.log(a);
let a = 20;

function test() {

    let a = 10; console.log(greeting);   // Output: undefined
    var greeting = "Hello!";


    console.log(greeting);   // Output: "Hello!"dasdasd

    // Behind the scenes:
    // var greeting;              <-- hoisted with undefined
    // console.log(greeting);    <-- undefined
    // greeting = "Hello!";      <-- assignment stays in place
    // console.log(greeting);    <-- "Hello!"
    console.log(a);
}

test();

// Step 1 - Defination of functions
function getUserStatus() {
    // var status_code = undefined; - not shown to you.
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);

}

// Step 2 - Calling of the functions
getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.


// console.log(username);
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log("Pramod is awesome");
let username = "Dutta";
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log("Pramod is awesome");
console.log(username);



