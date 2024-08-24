// 10 base log

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

// power
function power(a, b){
    return Math.pow(a, b);
}

// Main functionality 
// ====================================
// ====================================
// ====================================
// ====================================

let numberPads = document.querySelectorAll(".btn");
let display = document.querySelector("#head");
let logBtn = document.querySelector(".logarithm");
let sineBtn = document.querySelector(".sine");
let cosineBtn = document.querySelector(".cosine");
let tangentBtn = document.querySelector(".tangent");
let squreBtn = document.querySelector(".squre");
let rootBtn = document.querySelector(".root");
let powerBtn = document.querySelector(".power");
let braketBtn1 = document.querySelector(".braket1");
let braketBtn2 = document.querySelector(".braket2");
let equalBtn = document.querySelector(".equal");
let numberBtns = document.querySelectorAll(".number");
let clearBtn = document.querySelector(".clear");
let backSpaceBtn = document.querySelector(".backspace");
let binaryOps = document.querySelectorAll(".binary_op");


// catching error
function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Math Error";
    }
}
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

sineBtn.addEventListener("click", () => {
    display.value += sineBtn.value;
});
cosineBtn.addEventListener("click", () => {
    display.value += cosineBtn.value;
});
tangentBtn.addEventListener("click", () => {
    display.value += tangentBtn.value;
});
logBtn.addEventListener("click", () => {
    display.value += logBtn.value;
});

braketBtn1.addEventListener("click", () => {
    display.value += braketBtn1.value;
});
braketBtn2.addEventListener("click", () => {
    display.value += braketBtn2.value;
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