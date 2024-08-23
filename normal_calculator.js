// 10 base log

// addition
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








// Main functionality 
// ====================================
// ====================================
// ====================================
// ====================================



// catching error
function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Math Error";
    }
}

let numberPads = document.querySelectorAll(".inputNumberPad");
let display = document.querySelector(".display");
let equalBtn = document.querySelector(".equal");
let numberBtns = document.querySelectorAll(".number");
let clearBtn = document.querySelector(".clear");
let binaryOps = document.querySelectorAll(".binary_op");
let dotBtn = document.querySelector(".dot");
let backSpaceBtn = document.querySelector(".backspace");

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
       display.value += numberBtn.value; 
    });
});
dotBtn.addEventListener("click", () => {
    display.value += dotBtn.value;
});
binaryOps.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
       display.value += numberBtn.value;
    });
});
equalBtn.addEventListener("click", () => {
    display.value = calculate(display.value);
});
backSpaceBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
clearBtn.addEventListener("click", () => {
    display.value = "";
});