const input = document.querySelector('#input-ln');
const output = document.querySelector('#output-ln');
const buttons = document.querySelectorAll('button');
let op  = '';
let firstNum = '';
let secNum = '';
console.log(buttons);

function clear(){
    firstNum = '';
    secNum = '';
    op = '';
    input.textContent = '';
    output.textContent = '';
}

function firstA(A){
    firstNum += A;
    console.log("first" + firstNum);
    input.textContent += A;
    
}
function secA(A){
    secNum += A;
    console.log("second" + secNum);
    input.textContent += A;
    
}

function add(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b){
    if (parseFloat(b) == 0){
        return "can't quite answer this one cheif";
    }
    else{
        return parseFloat(a) / parseFloat(b);
    }
}


function operationsFunc (op,firstNum,secNum){

    switch(op){
        case '+':
            return add(firstNum, secNum);
            break;
        case '-':
            return subtract(firstNum, secNum);
            break;
        case 'X':
            return multiply(firstNum, secNum);
            break;
        case '/':
            return divide(firstNum, secNum);
            break;
    }

}
function evaluate(op,firstNum,secNum){
    let results = operationsFunc(op,firstNum,secNum);
    output.textContent = "= " + results;
    console.log(results);
}
buttons.forEach((button) => 
    button.addEventListener('click', () => 
    {
        
        if (button.id == "clear"){
            console.log("clear");
            clear();
        }
        else if (button.id == "delete")
        {
            console.log("delete");
        }
        else if (button.className == "number")
        {
            // console.log("number");
            if (secNum == '' && op == '')
            {
                firstA(button.textContent);
            } else if (!(firstNum == '') && !(op == '') )
            {
                secA(button.textContent);
            }
        }
        else if (button.className == "operator")
        {
            op = button.textContent;
            input.textContent += op;
            
        }
        else if (button.id == "enter")
        {
            evaluate(op,firstNum,secNum);
            console.log("enter");
        }
        
    }));