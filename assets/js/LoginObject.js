var createLogin = {
    renderHeader : function() {
        var getHeader = document.querySelector('.logIn')
        var createLogInInformation = document.createElement('section')
        createLogInInformation.classList.add('logIn__Information')
        getHeader.appendChild(createLogInInformation)

        var createInputText = document.createElement('input')
        createInputText.classList.add('name')
        createInputText.setAttribute('type', 'text')
        createInputText.setAttribute('placeholder', 'Name')
        var getinfo = document.querySelector('.logIn__Information')
        getinfo.appendChild(createInputText)

        var createInputPass = document.createElement('input')
        createInputPass.classList.add('password')
        createInputPass.setAttribute('type', 'password')
        createInputPass.setAttribute('placeholder', 'Name')
        getinfo.appendChild(createInputPass)

        var createButton = document.createElement('button')
        createButton.classList.add('submit')
        createButton.innerHTML = "Log In"
        getinfo.appendChild(createButton)
    },
    renderMain : function() {
        var getMain = document.querySelector('.main')
        var createDiv = document.createElement('div')
        createDiv.classList.add('welcome')
        createDiv.innerHTML = 'Welcome to Facebook'
        getMain.appendChild(createDiv)
    },
    renderFooter : function() {
        var getFooter = document.querySelector('.register')
        var createRegInfo = document.createElement('section')
        createRegInfo.classList.add('register__Information')
        getFooter.appendChild(createRegInfo)

        var regInfo = document.querySelector('.register__Information')
        var createInputTextR = document.createElement('input')
        createInputTextR.classList.add('nameR')
        createInputTextR.setAttribute('type', 'text')
        createInputTextR.setAttribute('placeholder', 'Name')
        regInfo.appendChild(createInputTextR);

        var createInputPassR = document.createElement('input')
        createInputPassR.classList.add('passwordR')
        createInputPassR.setAttribute('type', 'password')
        createInputPassR.setAttribute('placeholder', 'Password')
        regInfo.appendChild(createInputPassR);

        var createButtonR = document.createElement('button')
        createButtonR.classList.add('submitR')
        createButtonR.innerHTML = 'Register';
        regInfo.appendChild(createButtonR)

    },
    renderAll : function() {
        createLogin.renderHeader();
        createLogin.renderMain();
        createLogin.renderFooter();
    }
}