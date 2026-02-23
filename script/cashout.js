// way 1

document.getElementById('cashout').addEventListener('click', function(){
    const cashoutNumber=getValueFromInput('cashout-number');
    if(cashoutNumber.length != 11){
        alert('Invalid Number')
        return;
    }

    const cashoutAmount =getValueFromInput('cashout-amount');

    // const currentBalance = getBalance('balance')

    const newBalance = getBalance() - Number(cashoutAmount);

    if( newBalance < 0){
    alert('Invalid Amount');
    return;
    }

    const pin = getValueFromInput('cashout-pin');

    if(pin === '1234'){
        alert('Cashout Successful')
        setBalance(newBalance);
    }
    else{
        alert('Invalid Pin')
        return;
    }
})




//  way 2

// document.getElementById('cashout')
// .addEventListener('click', function(){

// // 1. get the agent number & validate
// const cashoutNumberInput = document.getElementById('cashout-number');
// const cashoutNumber = cashoutNumberInput.value;
// console.log(cashoutNumber)
// if(cashoutNumber.length != 11){
//     alert('Invalid Agent Number');
//     return;
// }


// // 2. get the amount , validate, convert to number
// const cashoutAmountInput = document.getElementById('cashout-amount');
// const cashoutAmount = cashoutAmountInput.value;
// console.log(cashoutAmount)


// // 3. get current balance , validate, convert to number
// const currentBalance = document.getElementById('balance');
// const balance = currentBalance.innerText; 
// console.log(balance)


// // 4. calculate new balance 
// const newBalance = Number(balance) - Number(cashoutAmount);


// if( newBalance < 0){
//     alert('Invalid Amount');
//     return;
// }
// console.log(newBalance)


// // 5. get the pin and verify

// const cashoutPinInput = document.getElementById('cashout-pin');
// const pin = cashoutPinInput.value;

// if(pin === '1234'){
// // 5-1 true:: show an alert > set new balance
// alert('Cashout Successful')
// console.log('New Balance',newBalance)
// currentBalance.innerText = newBalance;
// }
// else{
// // 5-2 false:: show an error alert > return
// alert('Invalid Pin')
// return;
// }
// });