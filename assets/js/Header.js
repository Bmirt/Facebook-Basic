// var Header = {
//     headerElement : '',

//     renderHeader : function() {
//         var headerEl = document.createElement('header');
//         headerEl.classList.add('header');
//         headerEl.id = 'header';
//         General.root.appendChild(headerEl);
//         Header.headerElement = document.getElementById('header');
//     },

//     renderLogo: function() {
//         var logo = document.createElement('h1');
//         var secondaryText = document.createElement('span');
//         var logoText = document.createTextNode('FACEBOOK');
//         var secondaryLogoText = document.createTextNode('SECONDARY TEXT');
//         logo.classList.add('header__logo');
//         secondaryText.classList.add('nino');
//         logo.appendChild(logoText);
//         logo.appendChild(secondaryText);
//         secondaryText.appendChild(secondaryLogoText);
//         Header.headerElement.appendChild(logo);
//     },
    
//     render: function() {
//         Header.renderHeader();
//         Header.renderLogo();
//     }
// }



function addIcon (className) {
    var el = document.createElement('div');
    el.classList.add(className);
    document.body.appendChild(el);
}

addIcon('pirveli');
addIcon('meore');
addIcon('mesame');
addIcon('meotxe');
addIcon('mexute');