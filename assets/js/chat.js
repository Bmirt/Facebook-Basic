var chatContainer = document.querySelector('.chatContainer');
var popUps = 0;

var deleteThis = function(listItem) {
    chatContainer.removeChild(listItem.parentNode.parentNode.parentNode)
    popUps -= 1
}


var displayPopUp = function(item) {
    if(popUps === 0) {
        var createChatPopUp = document.createElement('div')
        createChatPopUp.classList.add('chatPopUp')
        createChatPopUp.style.display = 'block'
        chatContainer.appendChild(createChatPopUp)

        var createPopUpHead = document.createElement('div')
        createPopUpHead.classList.add('PopUp__head')
        var findchatPopUp = document.querySelector('.chatPopUp')
        findchatPopUp.appendChild(createPopUpHead)

        var popUpHeadLeft = document.createElement('div')
        popUpHeadLeft.classList.add('PopUp__head__left')
        popUpHeadLeft.innerHTML = item.childNodes[1].innerHTML
        var findpopUpHead = document.querySelector('.PopUp__head')
        findpopUpHead.appendChild(popUpHeadLeft)

        var popUpHeadRight = document.createElement('div')
        popUpHeadRight.classList.add('PopUp__head__right')
        var findpopUpHead = document.querySelector('.PopUp__head')
        findpopUpHead.appendChild(popUpHeadRight)

        var createA = document.createElement('a')
        createA.onclick = function() {deleteThis(this)}
        createA.innerHTML = '✕';
        var findpopUpHeadRight = document.querySelector('.PopUp__head__right')
        findpopUpHeadRight.appendChild(createA)

        var createpopUpBody = document.createElement('div')
        createpopUpBody.classList.add('PopUp__body')
        findchatPopUp.appendChild(createpopUpBody)

        var findPopUpBody = document.querySelector('.PopUp__body')
        var createmsgLeft = document.createElement('div')
        createmsgLeft.classList.add('left__message')
        createmsgLeft.innerHTML = 'გამო რა გარეთ'
        findPopUpBody.appendChild(createmsgLeft)

        var createmsgRight = document.createElement('div')
        createmsgRight.classList.add('right__message')
        createmsgRight.innerHTML = 'დამაცადე 1 წუთი'
        findPopUpBody.appendChild(createmsgRight)

        var createpopUpbottom = document.createElement('div')
        createpopUpbottom.classList.add('PopUp__bottom')
        findchatPopUp.appendChild(createpopUpbottom)

        var createChatInput = document.createElement('input')
        createChatInput.classList.add('chatInput')
        createChatInput.setAttribute('type', 'text')
        createChatInput.setAttribute('placeholder', 'Type your text here...')
        var findpopUpbottom = document.querySelector('.PopUp__bottom')
        findpopUpbottom.appendChild(createChatInput)

        popUps += 1
        return
    }
    if(popUps === 1) {
        var createChatPopUp = document.createElement('div')
        createChatPopUp.classList.add('chatPopUp')
        createChatPopUp.style.display = 'block'
        chatContainer.appendChild(createChatPopUp)

        var createPopUpHead = document.createElement('div')
        createPopUpHead.classList.add('PopUp__head')
        var findchatPopUp = document.querySelectorAll('.chatPopUp')
        findchatPopUp[1].appendChild(createPopUpHead)

        var popUpHeadLeft = document.createElement('div')
        popUpHeadLeft.classList.add('PopUp__head__left')
        popUpHeadLeft.innerHTML = item.childNodes[1].innerHTML
        var findpopUpHead = document.querySelectorAll('.PopUp__head')
        findpopUpHead[1].appendChild(popUpHeadLeft)

        var popUpHeadRight = document.createElement('div')
        popUpHeadRight.classList.add('PopUp__head__right')
        var findpopUpHead = document.querySelectorAll('.PopUp__head')
        findpopUpHead[1].appendChild(popUpHeadRight)

        var createA = document.createElement('a')
        createA.onclick = function() {deleteThis(this)}
        createA.innerHTML = '✕';
        var findpopUpHeadRight = document.querySelectorAll('.PopUp__head__right')
        findpopUpHeadRight[1].appendChild(createA)

        var createpopUpBody = document.createElement('div')
        createpopUpBody.classList.add('PopUp__body')
        findchatPopUp[1].appendChild(createpopUpBody)

        var findPopUpBody = document.querySelectorAll('.PopUp__body')
        var createmsgLeft = document.createElement('div')
        createmsgLeft.classList.add('left__message')
        createmsgLeft.innerHTML = 'რას შვრები ?'
        findPopUpBody[1].appendChild(createmsgLeft)

        var createmsgRight = document.createElement('div')
        createmsgRight.classList.add('right__message')
        createmsgRight.innerHTML = 'რავი შენ ?'
        findPopUpBody[1].appendChild(createmsgRight)

        var createpopUpbottom = document.createElement('div')
        createpopUpbottom.classList.add('PopUp__bottom')
        findchatPopUp[1].appendChild(createpopUpbottom)

        var createChatInput = document.createElement('input')
        createChatInput.classList.add('chatInput')
        createChatInput.setAttribute('type', 'text')
        createChatInput.setAttribute('placeholder', 'Type your text here...')
        var findpopUpbottom = document.querySelectorAll('.PopUp__bottom')
        findpopUpbottom[1].appendChild(createChatInput)

        popUps += 1
        return
    }
    if(popUps === 2) {
        var createChatPopUp = document.createElement('div')
        createChatPopUp.classList.add('chatPopUp')
        createChatPopUp.style.display = 'block'
        chatContainer.appendChild(createChatPopUp)

        var createPopUpHead = document.createElement('div')
        createPopUpHead.classList.add('PopUp__head')
        var findchatPopUp = document.querySelectorAll('.chatPopUp')
        findchatPopUp[2].appendChild(createPopUpHead)

        var popUpHeadLeft = document.createElement('div')
        popUpHeadLeft.classList.add('PopUp__head__left')
        popUpHeadLeft.innerHTML = item.childNodes[1].innerHTML
        var findpopUpHead = document.querySelectorAll('.PopUp__head')
        findpopUpHead[2].appendChild(popUpHeadLeft)

        var popUpHeadRight = document.createElement('div')
        popUpHeadRight.classList.add('PopUp__head__right')
        var findpopUpHead = document.querySelectorAll('.PopUp__head')
        findpopUpHead[2].appendChild(popUpHeadRight)

        var createA = document.createElement('a')
        createA.onclick = function() {deleteThis(this)}
        createA.innerHTML = '✕';
        var findpopUpHeadRight = document.querySelectorAll('.PopUp__head__right')
        findpopUpHeadRight[2].appendChild(createA)

        var createpopUpBody = document.createElement('div')
        createpopUpBody.classList.add('PopUp__body')
        findchatPopUp[2].appendChild(createpopUpBody)

        var findPopUpBody = document.querySelectorAll('.PopUp__body')
        var createmsgLeft = document.createElement('div')
        createmsgLeft.classList.add('left__message')
        createmsgLeft.innerHTML = 'აქ ხარ ?'
        findPopUpBody[2].appendChild(createmsgLeft)

        var createmsgRight = document.createElement('div')
        createmsgRight.classList.add('right__message')
        createmsgRight.innerHTML = 'კი რაარი ?'
        findPopUpBody[2].appendChild(createmsgRight)

        var createpopUpbottom = document.createElement('div')
        createpopUpbottom.classList.add('PopUp__bottom')
        findchatPopUp[2].appendChild(createpopUpbottom)

        var createChatInput = document.createElement('input')
        createChatInput.classList.add('chatInput')
        createChatInput.setAttribute('type', 'text')
        createChatInput.setAttribute('placeholder', 'Type your text here...')
        var findpopUpbottom = document.querySelectorAll('.PopUp__bottom')
        findpopUpbottom[2].appendChild(createChatInput)

        popUps += 1
        return
    }
    else {
        return
    }
}