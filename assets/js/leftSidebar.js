var startingPoint = document.querySelector('.leftSidebar')

var leftSidebar = {
    renderContainer : function() {
        var createContainer = document.createElement('div')
        createContainer.classList.add('leftSidebar__container')
        startingPoint.appendChild(createContainer)

        var createImg = document.createElement('img')
        createImg.classList.add('dellLogo')
        createImg.setAttribute('src', 'assets/styles/components/Dell-logo.png')
        createImg.setAttribute('alt', 'Dell-Logo')
        var findContainer = document.querySelector('.leftSidebar__container')
        findContainer.appendChild(createImg)

        var createDiv = document.createElement('div')
        createDiv.classList.add('logo__description')
        createDiv.innerHTML = 'Dell';
        findContainer.appendChild(createDiv)

        var logoDescription = document.createElement('div')
        logoDescription.classList.add('logo__description__extended')
        logoDescription.innerHTML = '@DellOfficial';
        var findAnotherDiv = document.querySelector('.logo__description')
        findAnotherDiv.appendChild(logoDescription)

    },

    renderList : function() {
        var createList = document.createElement('div')
        createList.classList.add('list')
        startingPoint.appendChild(createList)
        function addItem (Name, Line) {
            let div = document.createElement('div')
            div.classList.add('listItem')
            var findContainer = document.querySelector('.leftSidebar__container')
            findContainer.appendChild(div)

            let text = document.createElement('a')
            text.classList.add('listItemA')
            text.setAttribute('href', '#')
            text.innerHTML = Name
            var findDiv = document.querySelectorAll('.listItem')
            findDiv[Line].appendChild(text)
        }

        addItem('Home', 0);
        addItem('Events', 1);
        addItem('Reviews', 2);
        addItem('About', 3);
        addItem('Videos', 4);
        addItem('Photos', 5);
        addItem('Posts', 6);
        addItem('Jobs', 7);
        addItem('Community', 8);
        addItem('Info and ads', 9);
    },

    render : function() {
        leftSidebar.renderContainer();
        leftSidebar.renderList();
    }
}

