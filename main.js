// addition
// trigonometry
    // 1. sin 
    // 2. cos
    // 3. tan
// 10 base log
// natural log
// square root
// fraction

function addition(a,b){
    return a+b;
}

function sin(a){
    return Math.sin(a);    
}
function tan(a){
    return Math.tan(a);
}

function sqrt(a){
    return Math.sqrt(a);
}

function ln(a){
    return Math.log(a);
}

function ln














































































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