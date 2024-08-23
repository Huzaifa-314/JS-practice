// 10 base log

function addition(a,b){
    return a+b;
}

// Sine
function sin(a){
    return Math.sin(a);    
}

// Cosine
function cos(a){
    return Math.cos(a);
}

// tangent
function tan(a){
    return Math.tan(a);
}

// squer root
function sqrt(a){
    return Math.sqrt(a);
}

// natural log
function ln(a){
    return Math.log(a);
}

// fraction
function ln(a, b){
    return a/b;
}

// substraction
function subtraction(){
    return a-b;
}

// multiplication
function multiplication(a, b){
    return a*b;
}

// division
function multiplication(a, b){
    return a/b;
}

// percentage
function multiplication(a){
    return a/100;
}

// factorial
function factorial(a){
    let mul = 1;

    if(a === 0 || a === 1){
        return 1;
    }
    else{
        for(let i = 2; i <= a; i++){
            mul *= i;
        }
        return mul;
    }
}

// power
function power(a, b){
    return Math.pow(a, b);
}

// catching error
function calculate(expression) {
    try {
        // Try to evaluate the expression
        let result = eval(expression);
        if (isNaN(result)) {
            throw new Error("Result is not a number.");
        }
        return result;
    } catch (error) {
        // Catch any errors and handle them
        console.error("Error:", error.message);
        return "Error!";
    }
}

// Main functionality 

let numberPads = document.querySelectorAll(".inputNumberPad");
let display = document.querySelector(".display");
let equalBtn = document.querySelector(".equal");
let numberBtns = document.querySelectorAll(".number");
let clearBtn = document.querySelector(".clear");
let binaryOps = document.querySelectorAll(".binary_op");

let currentNum = "";
let previousNum = "";
let operator = "";

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
       display.value += numberBtn.value; 
    });
});
binaryOps.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
       display.value += numberBtn.value; 
    });
});
equalBtn.addEventListener("click", () => {
    display.value = calculate(display.value);
});
clearBtn.addEventListener("click", () => {
    display.value = "";
});