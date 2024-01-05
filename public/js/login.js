let loginBtn = document.getElementById('btn');

loginBtn.addEventListener('click', loginFormProcessing);
const wrongValueDiv = document.getElementById('wrong-value-div');

function loginFormProcessing(ev){
    let data;

    data = document.getElementById('form-first-input');
    const username = data.value.trim();
    if(username == '' || username.length<8 || username.length > 15){
        data.focus();
        ev.preventDefault();
        data.classList.add('wrong-value');
        wrongValueDiv.textContent = 'Broj karaktera mora biti između 8 i 15';
        return false;
    }else{
        data.classList.remove('wrong-value');
        wrongValueDiv.textContent = '';
    }

    data = document.getElementById('form-password-input');
    const password = data.value.trim();
    if(password == '' || password.length<8 || password.length > 15){
        data.focus();
        ev.preventDefault();
        data.classList.add('wrong-value');
        wrongValueDiv.textContent = 'Broj karaktera mora biti između 8 i 15';
        return false;
    }else{
        data.classList.remove('wrong-value');
        wrongValueDiv.textContent = '';
        LoginSendDataToServer(username, password)
    }
}

function LoginSendDataToServer(username, password){
    console.log('ulogovan')
}