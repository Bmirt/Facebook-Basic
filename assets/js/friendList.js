var rightSidebar = document.querySelector('.rightSidebar')

var friendList = {
    renderFriendsList : function() {
        var createUl = document.createElement('ul');
        createUl.classList.add("rightSidebar__list");
        rightSidebar.appendChild(createUl);
    },
    renderFriends : function() {
        for(var i=0; i<Object.values(friends).length; i++) {

            var createFriend= document.createElement('li');
            createFriend.classList.add('rightSidebar__list__item')
            createFriend.addEventListener('click',function() {displayPopUp(this)});
            var findUl = document.querySelector('.rightSidebar__list')


            

            findUl.appendChild(createFriend)

            var createImg = document.createElement('img');
            createImg.classList.add('img')
            createImg.setAttribute('src', Object.values(friends)[i].image)
            var findFriend = document.querySelectorAll('.rightSidebar__list__item')
            findFriend[i].appendChild(createImg)

            var createName = document.createElement('span');
            createName.innerHTML = Object.values(friends)[i].name;
            createName.classList.add('friendList__text');
            findFriend[i].appendChild(createName)

        }
    },
    render : function() {
        friendList.renderFriendsList();
        friendList.renderFriends();
    }
}
