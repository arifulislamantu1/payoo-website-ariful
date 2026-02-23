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

     // 1- history-container ke dhore niye ashbo
    const history = document.getElementById('history-container')
    // 2- new div create korbo
    const newHistory = document.createElement('div');
    // 3- new div a innerHTML add korbo
    newHistory.innerHTML =`
    <div class="Transaction-card p-5 bg-base-100">

    Pay Bill ${billAmount} Successfully For 
        ${billSelect} at ${new Date()}, From ${billerAccount} 
                
            </div>
    `
    // 4- history-container e newDiv append korebo
    history.append(newHistory);
    }
    else{
    alert('Invalid Pin')
    return;
    }

})