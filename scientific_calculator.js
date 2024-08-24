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

powerBtn.addEventListener("click", () => {
    let x = prompt("Enter Base Number : ");
    let y = prompt("Enter Power Number : ");
    display.value = Math.pow(x, y);
});
squreBtn.addEventListener("click", () => {
    display.value = Math.pow(display.value, 2);
});
rootBtn.addEventListener("click", () => {
    display.value = Math.sqrt(display.value);
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