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

// global variables
let things_to_replace = new Set();
replace = {
    "sin" : "Math.sin",
    "cos" : "Math.sin",
    "tan" : "Math.tan",
    "log" : "Math.log",
    "pow" : "Math.pow"
}

//functions
// =================
// =================

// catching error
function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Math Error";
    }
}

// expression finalize function
function finalize(expression){
    things_to_replace.forEach((thing) =>{
        refined_expression = expression.replace(thing, replace[thing]);
    });
    console.log(refined_expression);
    return refined_expression;
}

//buttons to display
// ===============================
// ===============================
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
braketBtn1.addEventListener("click", () => {
    display.value += braketBtn1.value;
});
braketBtn2.addEventListener("click", () => {
    display.value += braketBtn2.value;
});
sineBtn.addEventListener("click", () => {
    things_to_replace.add("sin");
    display.value += sineBtn.value;
});
cosineBtn.addEventListener("click", () => {
    things_to_replace.add("cos");
    display.value += cosineBtn.value;
});
tangentBtn.addEventListener("click", () => {
    things_to_replace.add("tan");
    display.value += tangentBtn.value;
});
logBtn.addEventListener("click", () => {
    things_to_replace.add("log");
    display.value += logBtn.value;
});
squreBtn.addEventListener("click", () => {
    display.value = Math.pow(display.value, 2);
});
rootBtn.addEventListener("click", () => {
    display.value = Math.sqrt(display.value);
});
powerBtn.addEventListener("click", () => {
    things_to_replace.add("pow");
    display.value += powerBtn.value;
});

// calculation operational buttons
// ================================
// ================================
equalBtn.addEventListener("click", () => {
    expression = finalize(display.value);
    display.value = calculate(expression);
    things_to_replace.clear();
});
backSpaceBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
clearBtn.addEventListener("click", () => {
    things_to_replace.clear();
    display.value = "";
});