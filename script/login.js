document.getElementById('login-btn')
.addEventListener('click', function(){
//   1. get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;

//   2. get the pin input
    const pinInput = document.getElementById('input-pin');
    const pinDigit = pinInput.value;
    
//   3. match pin and number
    if(contactNumber === '01868000000' && pinDigit === '1234'){
        alert('Login Success');
    }

//   4. 3-1 true:::>> alert> homepage
    else{
        alert('Login Failed');
        return;
    }
//   4. 3-1 false:::>> alert> return loginpage
});