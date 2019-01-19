var nameLogin = document.querySelector('.name')
var passwordLogin = document.querySelector('.password')
var submitLogin = document.querySelector('.submit')

var LoginData = [
    {name:"Dell", password:"HPsucks123"},
]

submitLogin.addEventListener('click', function(){
    let output = '';
    for (var i=0; i<LoginData.length; i++){
        if(LoginData[i].name === nameLogin.value && LoginData[i].password === passwordLogin.value) {
            window.location.href = "mainPage.html"
            output = 'Correct';
            break
        }
        else {
            output = 'Incorrect'
        }
    }
    if (output == 'Incorrect') {
        alert('Name or Password is incorrect');
    } else if(output == 'Correct') {
        alert('Success')
    }
})

var nameRegister = document.querySelector('.nameR')
var passwordRegister = document.querySelector('.passwordR')
var submitRegister = document.querySelector('.submitR')

submitRegister.addEventListener('click', function(){
    if(nameRegister.value !== '' && passwordRegister.value !== '') {
        LoginData.push({name: nameRegister.value, password: passwordRegister.value})
    } else {
        alert('You are missing Name or Password')
    }
    nameRegister.value = '';
    passwordRegister.value = '';
})