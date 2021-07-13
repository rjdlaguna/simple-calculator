let tempNum = "", tempNum2 = "";
let result = 0;
let operator = "";
let otherOperator = "";
let numToCompute = 0;
let count = 0
let secondNum = 0;
let continuousOperator = false;
let numtoCompute2 = 0;
let oneOperator = false;
let answer = 0;
let arrOp = [];

getNumber = function(num){
    if(operator == "")
    {
        tempNum = tempNum + num;
        document.getElementById("number_field").value = tempNum;
    } else {
        tempNum = tempNum + num;
        document.getElementById("number_field").value = tempNum;
    }
}

performArithmetic = function(op, val) {
    operator = op;
    arrOp.push(op);
    count = count + val;
    if(arrOp.length == 1){
        answer = parseInt(tempNum)
    }
    if(arrOp.length > 1)
    {
        if( arrOp[0] === '+'){
            answer = answer + parseInt(tempNum);
        } else if(arrOp[0] === '-'){
            answer = answer - parseInt(tempNum);
        } else if(arrOp[0] === '*'){
            answer = answer * parseInt(tempNum);
        } else if(arrOp[0] === '/'){
            answer = answer / parseInt(tempNum);
        }
        arrOp[0] = arrOp[1];
        arrOp.pop();
        document.getElementById("number_field").value = answer;
    }
    tempNum = "";
}
showAnswer = function(){
    if(operator === '+'){
        result = answer + parseInt(tempNum);
    } else if(operator === '-'){
        result = answer - parseInt(tempNum);
    } else if(operator === '*'){
        result = answer * parseInt(tempNum);
    } else if(operator === '/'){
        result = answer / parseInt(tempNum);
    }
    document.getElementById("number_field").value = result
}

clearNumberField = function(){
    document.getElementById("number_field").value = 0;
    tempNum = "";
    numToCompute = "";
    result = "";
    operation = "";
    answer = "";
}