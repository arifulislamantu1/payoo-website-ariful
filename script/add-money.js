document.getElementById('add-money-btn')
.addEventListener('click', function(){
// 1 -  bank Account get
const bankAccount = getValueFromInput('add-money-bank');
if(bankAccount === 'Select a Bank'){
    alert('Please Select a Bank')
    return;
}

// 2 - get bank account number

const accon = getValueFromInput('add-money-number');
if(accon.length != 11){
    alert('Invalid Account No');
    return;
}
// 3 - get amount

const amount = getValueFromInput('add-money-amount')

const newBalance = getBalance() + Number(amount);

const pin = getValueFromInput('add-money-pin');
if(pin === '1234'){
    alert(`Add Money Successfully From 
        ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
}
else{
    alert('Invalid Pin')
    return;
}

})