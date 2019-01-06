const Post = {
    postCont: document.querySelector('.postsArea'),

    renderPost: function(text) {
        let name = "guga";
        let date = 26;
        // let text = "I like potato";
        
        var jijinga = document.createElement('div');
        jijinga.classList.add('fidplsy');
        // General.root.appendChild(jijinga);
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
        left_4.innerHTML = name;
        left_3.appendChild(left_4);

        var left_5 = document.createElement('p');
        left_5.classList.add('divpic4');
        left_5.innerHTML = date;
        left_3.appendChild(left_5);

        var left_6 = document.createElement('div');
        left_6.classList.add('divpic5');
        left_6.innerHTML = text;
        jijinga.appendChild(left_6);

        Post.postCont.appendChild(jijinga);

        let array = JSON.parse(localStorage.getItem('items'));
        array.push({"name":name,"date":date,"text":text});
        localStorage.setItem('items',JSON.stringify(array));
    },
    render: function() {
        Post.renderPost();
    },

    // removeitem:function() {
    //     localStorage.clear();
    //     // texting.innerHTML = '';
    //     localStorage.setItem('items', JSON.stringify([]));
    // }
}

let textarea = document.querySelector('textarea');
textarea.addEventListener('keyup',function(e){
    if (e.keyCode == 13) {
        Post.renderPost(this.value);
        this.value = "";
    }
});