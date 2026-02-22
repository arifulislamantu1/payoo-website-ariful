// machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// machine -> balance
function getBalance(){
 const currentBalance = document.getElementById('balance');
const balance = currentBalance.innerText;
return Number(balance);
}


// machine value -> set Balance

function setBalance(value){
const currentBalance = document.getElementById('balance');
currentBalance.innerText = value;
}