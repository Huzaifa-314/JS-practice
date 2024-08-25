document.addEventListener("DOMContentLoaded", function(){
    let digitBtns = document.querySelectorAll(".digit"); 
    let dotBtn = document.querySelector(".dot"); 
    let display = document.querySelector(".display input"); 
    let logBtn = document.querySelector(".logarithm"); 
    let sineBtn = document.querySelector(".sine");
    let cosineBtn = document.querySelector(".cosine"); 
    let tangentBtn = document.querySelector(".tangent"); 
    let rootBtn = document.querySelector(".root"); 
    let powerBtn = document.querySelector(".power");
    let bracket_open_Btn = document.querySelector(".bracket_open"); 
    let bracket_close_Btn = document.querySelector(".bracket_close"); 
    let equalBtn = document.querySelector(".equal"); 
    let clearBtn = document.querySelector(".clear"); 
    let backSpaceBtn = document.querySelector(".backspace"); 
    let binaryOps = document.querySelectorAll(".binary_op");
    let reminderBtn = document.querySelector(".reminder");
    let factorialBtn = document.querySelector(".factorial");

    expression = "";
    buttons_to_display = [dotBtn, bracket_open_Btn, bracket_close_Btn, sineBtn, cosineBtn, tangentBtn, logBtn, rootBtn, reminderBtn];
    const binaryOperators = ["+", "-", "*", "/", "%"];


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

    

    factorialBtn.addEventListener("click", () => {
        display.value += "!";
        last_number = "";
        start_index = 0;
        for(let i=expression.length - 1 ; i >= 0 ; i--){
            last_number+=expression[i];
            start_index = i;
            if(i-1 >= 0 && binaryOperators.includes(expression[i-1])) break;
        }
        console.log(start_index);
        last_number = last_number.split('').reverse().join('');

        expression = expression.slice(0,start_index)+"factorial("+last_number+")";
    });



    //buttons to display
    // ===============================
    // ===============================
    digitBtns.forEach((digitBtn) => {
        buttons_to_display.push(digitBtn);
    });
    binaryOps.forEach((binaryOp) => {
        buttons_to_display.push(binaryOp);
    });

    buttons_to_display.forEach((button)=>{
        button.addEventListener("click", () => {
            display.value += button.innerText;
            if(button.value) expression += button.value;
            else expression += button.innerText
            console.log(expression);
        });
    });


    // calculation operational buttons
    // ================================
    // ================================
    equalBtn.addEventListener("click", () => {
        result = calculate(expression)
        display.value = result;
        expression += result;
    });
    backSpaceBtn.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
        expression = expression.slice(0, -1);
    });
    clearBtn.addEventListener("click", () => {
        display.value = "";
        expression = "";
    });

})





// problem
// have to erase