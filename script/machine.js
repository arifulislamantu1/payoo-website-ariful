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


// machine id > hide all > show id

function showOnly(id){
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendmoney = document.getElementById('transfer-money');
    const getbonus = document.getElementById('get-bonus');
    const paybill = document.getElementById('pay-bill');
    
    // shobai k hide kore daw
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    sendmoney.classList.add('hidden');
    getbonus.classList.add('hidden');
    paybill.classList.add('hidden');

    //  id wala element k show koro
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}

