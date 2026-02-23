document.getElementById('pay-now-btn')
    .addEventListener('click', function(){

    const billSelect = getValueFromInput('pay-bill-select');
    if(billSelect === 'Select back'){
        alert('Please Select a Bill Option');
        return;
    }

    const billerAccount = getValueFromInput('pay-bill-number')
    if(billerAccount.length != 11){
        alert('Invalid Account No');
    return;
    }

    const billAmount = getValueFromInput('pay-bill-amount')


    const newBalance = getBalance() - Number(billAmount);

    const pin = getValueFromInput('pay-bill-pin');
    if(pin === '1234'){
    alert('Pay Bill Successfully');
    setBalance(newBalance);
    }
    else{
    alert('Invalid Pin')
    return;
    }

})