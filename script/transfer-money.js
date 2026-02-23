document.getElementById('send-money')
.addEventListener('click', function(){

    const transferNumber=getValueFromInput('transfer-number');
    if(transferNumber.length != 11){
        alert('Invalid Number');
        return;
    }

    const transferAmount = getValueFromInput('transfer-amount');
    
    const newBalance = getBalance() - Number(transferAmount);

    if( newBalance < 0){
    alert('Invalid Amount');
    return;
    }

    const pin = getValueFromInput('transfer-pin');

    if(pin === '1234'){
        alert(`Transfer Cash Successfully at ${new Date()}`)
        setBalance(newBalance);
    }
    else{
        alert('Invalid Pin')
        return;
    }

})