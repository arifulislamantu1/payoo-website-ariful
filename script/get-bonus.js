document.getElementById('get-bonus-btn')
  .addEventListener('click', function(){
    const coupon = getValueFromInput('coupon-code')
    const newBalance = getBalance() + 100 ;
    if( coupon === 'AN23'){
        alert('GET $100 ON YOUR BALANCE');
        setBalance(newBalance);
    }
    else{
        alert('Invalid Coupon');
        return;
    }
})