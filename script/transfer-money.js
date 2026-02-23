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
        alert('Transfer Cash Successfully')
        setBalance(newBalance);

        // 1- history-container ke dhore niye ashbo
    const history = document.getElementById('history-container')
    // 2- new div create korbo
    const newHistory = document.createElement('div');
    // 3- new div a innerHTML add korbo
    newHistory.innerHTML =`
    <div class="Transaction-card p-5 bg-base-100">

    Transfer Cash ${transferAmount} Successfully From ${transferNumber} at ${new Date()}
                
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