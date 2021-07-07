let tempNum = "";
let result = 0;
let operation = "";
let numToCompute = 0;
let count = 0
let secondNum = 0;
let continuousOperator = false;
let numtoCompute2 = 0;
getNumber = function(num){
    if(operation == "")
    {
        tempNum = tempNum + num;
        document.getElementById("number_field").value = tempNum;
    } else {
        tempNum = ""
        document.getElementById("number_field").textContent = tempNum;
        tempNum = tempNum + num;
        document.getElementById("number_field").value = tempNum;
    }

}
performArithmetic = function(op, val){
    count = count + val;
    operation = op;
    if(count == 1)
    {
        operation = op;
        numToCompute = tempNum;
    } else {
        numtoCompute2 = tempNum;
        if(result != 0){
            numToCompute = parseInt(result)
        }
        showAnswer();
    }

}
showAnswer = function(){
    if(numtoCompute2 == 0){
        secondNum = document.getElementById("number_field").value;
    } else {
        secondNum = numtoCompute2;
    }
    if(operation === '+'){
        result = parseInt(numToCompute) + parseInt(secondNum);
    } else if(operation === '-'){
        result = parseInt(numToCompute) - parseInt(secondNum);
    } else if(operation === '*'){
        result = parseInt(numToCompute) * parseInt(secondNum);
    } else if(operation === '/'){
        result = parseInt(numToCompute) / parseInt(secondNum);
    }
    document.getElementById("number_field").value = result
}

clearNumberField = function(){
    document.getElementById("number_field").value = 0;
    tempNum = "";
    secondNum = "";
    numToCompute = "";
    result = "";
    operation = "";
}