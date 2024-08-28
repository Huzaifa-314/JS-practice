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
    buttons_to_display = [dotBtn, bracket_open_Btn, bracket_close_Btn, reminderBtn];
    buttons_to_display_with_bracket = [rootBtn,sineBtn,cosineBtn,tangentBtn,logBtn];
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
        if(expression[expression.length - 1] == ")"){
            start_index=0;
            openedBracket = 0;
            closedBracket = 1;
            for(let i=expression.length - 2 ; i >= 0 ; i--){
                start_index = i;
                if(expression[i] == "(") openedBracket++;
                if(expression[i] == ")") closedBracket++;
                if(openedBracket == closedBracket) break;
            }
            expression = expression.slice(0,start_index) + "factorial" + expression.slice(start_index,expression.length);
            console.log(expression);
            
            
        }
        else {
            last_number = "";
            start_index = 0;
            for(let i=expression.length - 1 ; i >= 0 ; i--){
                last_number+=expression[i];
                start_index = i;
                if(i-1 >= 0 && binaryOperators.includes(expression[i-1])){ 
                    break;
                }
            }
            last_number = last_number.split('').reverse().join('');
            console.log(expression);
            expression = expression.slice(0,start_index)+`factorial(${last_number})`;
            console.log(expression);
        }
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

    buttons_to_display_with_bracket.forEach((button)=>{
        button.addEventListener("click", () => {
            display.value += button.innerText+"(";
            if(button.value) expression += button.value+"(";
            else expression += button.innerText+"(";
            console.log(expression);
        });
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
        result = calculate(expression);
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