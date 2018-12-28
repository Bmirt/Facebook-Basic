var Header = {
    headerElement: '',

    renderHeader: function () {
        var headerEl = document.createElement('header');
        headerEl.classList.add('header');
        headerEl.id = 'header';
        General.root.appendChild(headerEl);
        Header.headerElement = document.getElementById('header');
    },

    renderLogo: function () {
        var logo = document.createElement('div');
        var leftdiv = document.createElement('div');
        leftdiv.classList.add('header__logo__div__left')
        // var secondaryText = document.createElement('span');
        // var logoText = document.createTextNode('FACEBOOK');
        // var secondaryLogoText = document.createTextNode('SECONDARY TEXT');
        logo.classList.add('header__logo');
        logo.appendChild(leftdiv);

        var logoicon = document.createElement('span');
        logoicon.classList.add("header__logo__icon");
        leftdiv.appendChild(logoicon);


        var logoinput = document.createElement('input');
        logoinput.classList.add('header__logo__input');
        leftdiv.appendChild(logoinput);

        var logosearch = document.createElement('span');
        logosearch.classList.add('header__logo__search')
        leftdiv.appendChild(logosearch);


        // secondaryText.classList.add('nino');
        // logo.appendChild(logoText);
        // logo.appendChild(secondaryText);
        // secondaryText.appendChild(secondaryLogoText);
        Header.headerElement.appendChild(logo);
    },

    render: function () {
        Header.renderHeader();
        Header.renderLogo();
    }
}



// function addIcon (className) {
//     var el = document.createElement('div');
//     el.classList.add(className);
//     document.body.appendChild(el);
// }

// addIcon('pirveli');
// addIcon('meore');
// addIcon('mesame');
// addIcon('meotxe');
// addIcon('mexute');