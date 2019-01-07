if (localStorage.getItem('items')) {
    let array = JSON.parse(localStorage.getItem('items'));
    for (let i = 0; i < array.length; i++) {

        var jijinga = document.createElement('div');
        jijinga.classList.add('fidplsy');
        // Adding stuff here
        var leftdiv = document.createElement('div');
        leftdiv.classList.add('div__left');
        jijinga.appendChild(leftdiv);

        var left_2 = document.createElement('div');
        left_2.classList.add('divpic');
        leftdiv.appendChild(left_2);

        var left_3 = document.createElement('div');
        left_3.classList.add('divpic2');
        leftdiv.appendChild(left_3);


        var left_4 = document.createElement('p');
        left_4.classList.add('divpic3');
        left_4.innerHTML = array[i].name;
        left_3.appendChild(left_4);

        var left_5 = document.createElement('p');
        left_5.classList.add('divpic4');
        left_5.innerHTML = array[i].date;
        left_3.appendChild(left_5);


        //changing this
        var left_6 = document.createElement('p');
        left_6.classList.add('divpic5');
        left_6.innerHTML = array[i].text;
        jijinga.appendChild(left_6);


        var elem = document.createElement("img");
        elem.setAttribute("src", "assets/styles/components/Dell-logo.png");
        elem.setAttribute("height", "50");
        elem.setAttribute("width", "50");
        elem.setAttribute("alt", "Flower");
        left_2.appendChild(elem);

        Post.postCont.appendChild(jijinga);
    }
} else {
    localStorage.setItem('items', JSON.stringify([]));
}