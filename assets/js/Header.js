var Header = {
    headerElement: '',
    headerLogo: '',
    headerNavigation:'',
    headerNavright:'',

    renderHeader: function () {
        var headerEl = document.createElement('div');
        headerEl.classList.add('header');
        General.root.appendChild(headerEl);
        Header.headerElement = headerEl;
    },

    renderLogo: function () {
        var logo = document.createElement('div');
        var leftdiv = document.createElement('div');
        leftdiv.classList.add('header__logo__div__left')

        logo.classList.add('header__logo');
        logo.appendChild(leftdiv);
        Header.headerLogo = logo;

        var logo_link = document.createElement('span');
        logo_link.classList.add('header__logo__icon');
        leftdiv.appendChild(logo_link);

        var logo_linkof = document.createElement('a')
        logo_linkof.setAttribute('href', '#');
        logo_link.appendChild(logo_linkof);

        var iconiteself = document.createElement('i');
        iconiteself.classList.add('fab', 'fa-facebook-square');
        logo_linkof.appendChild(iconiteself);


        var logo_input = document.createElement('input');
        logo_input.classList.add('header__logo__input');
        leftdiv.appendChild(logo_input);

        var logosearch = document.createElement('span');
        logosearch.classList.add('header__logo__search')
        leftdiv.appendChild(logosearch);

        var linkforsearch = document.createElement('a');
        linkforsearch.setAttribute('href', '#');
        logosearch.appendChild(linkforsearch);

        var iconforsearch = document.createElement('i');
        iconforsearch.classList.add('fa', 'fa-search');
        linkforsearch.appendChild(iconforsearch);

        Header.headerElement.appendChild(logo);
    },

    renderLogoright: function () {
        var logorightside = document.createElement('div');
        logorightside.classList.add('header__logo__div__right');
        Header.headerLogo.appendChild(logorightside);

        var rightlist = document.createElement('ul');
        rightlist.classList.add('header__logo__div__right__list');
        logorightside.appendChild(rightlist);

        var listitem_1 = document.createElement('li');
        listitem_1.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listitem_1);

        var listitem1_span = document.createElement('span');
        listitem1_span.classList.add('header__logo__div__right__list__pic');
        listitem_1.appendChild(listitem1_span);

        var listitem1_span_white = document.createElement('span');
        listitem1_span_white.classList.add('header__whitec');
        listitem1_span.appendChild(listitem1_span_white);

        var listitem_2 = document.createElement('li');
        listitem_2.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listitem_2);

        var listitem_2_link = document.createElement('a');
        listitem_2_link.setAttribute('href', '#');
        var listitem_2_link_text = document.createTextNode('Name');
        listitem_2_link.appendChild(listitem_2_link_text);
        listitem_2.appendChild(listitem_2_link);

        var listeitem_3 = document.createElement('li');
        listeitem_3.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_3);

        var listeitem_3_link = document.createElement('a');
        listeitem_3_link.setAttribute('href','#');
        listeitem_3.appendChild(listeitem_3_link);

        var listeitem_3_icon = document.createElement('i');
        listeitem_3_icon.classList.add('fab','fa-accessible-icon');
        listeitem_3_link.appendChild(listeitem_3_icon);

        var listeitem_4 =document.createElement('li');
        listeitem_4.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_4);

        var listeitem_4_link = document.createElement('a');
        listeitem_4_link.setAttribute('href','#');
        listeitem_4.appendChild(listeitem_4_link);

        var listeitem_4_text = document.createTextNode('Home');
        listeitem_4_link.appendChild(listeitem_4_text);

        var listeitem_5 =document.createElement('li');
        listeitem_5.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_5);

        var listeitem_5_link =document.createElement('a');
        listeitem_5_link.setAttribute('href','#');
        listeitem_5.appendChild(listeitem_5_link);

        var listeitem_5_text = document.createTextNode('Find Friends');
        listeitem_5_link.appendChild(listeitem_5_text);

        var listeitem_6 =document.createElement('li');
        listeitem_6.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_6);

        var listeitem_6_link = document.createElement('a');
        listeitem_6_link.setAttribute('href','#');
        listeitem_6.appendChild(listeitem_6_link);

        var listeitem_6_icon = document.createElement('i');
        listeitem_6_icon.classList.add('fas', 'fa-user-friends');
        listeitem_6_link.appendChild(listeitem_6_icon);

        var listeitem_7 =document.createElement('li');
        listeitem_7.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_7);

        var listeitem_7_link = document.createElement('a');
        listeitem_7_link.setAttribute('href','#');
        listeitem_7.appendChild(listeitem_7_link);

        var listeitem_7_icon = document.createElement('i');
        listeitem_7_icon.classList.add('fab', 'fa-facebook-messenger');
        listeitem_7_link.appendChild(listeitem_7_icon);

        var listeitem_8 =document.createElement('li');
        listeitem_8.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_8);

        var listeitem_8_link = document.createElement('a');
        listeitem_8_link.setAttribute('href','#');
        listeitem_8.appendChild(listeitem_8_link);

        var listeitem_8_icon = document.createElement('i');
        listeitem_8_icon.classList.add('fas', 'fa-bell');
        listeitem_8_link.appendChild(listeitem_8_icon);

        var listeitem_9 =document.createElement('li');
        listeitem_9.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_9);

        var listeitem_9_link = document.createElement('a');
        listeitem_9_link.setAttribute('href','#');
        listeitem_9.appendChild(listeitem_9_link);

        var listeitem_9_icon = document.createElement('i');
        listeitem_9_icon.classList.add('fas' ,'fa-question-circle');
        listeitem_9_link.appendChild(listeitem_9_icon);

        var listeitem_10 =document.createElement('li');
        listeitem_10.classList.add('header__logo__div__right__list__item');
        rightlist.appendChild(listeitem_10);

        var listeitem_10_link = document.createElement('a');
        listeitem_10_link.setAttribute('href','#');
        listeitem_10.appendChild(listeitem_10_link);

        var listeitem_10_icon = document.createElement('i');
        listeitem_10_icon.classList.add('fas', 'fa-caret-down');
        listeitem_10_link.appendChild(listeitem_10_icon);
    },

    logonavigation:function(){
        var Navbar = document.createElement('div');
        Navbar.classList.add('Navigation');
        Header.headerElement.appendChild(Navbar);
        Header.headerNavigation = Navbar;
    

        var NavbarNavi = document.createElement('div');
        NavbarNavi.classList.add('Navigation__list');
        Header.headerNavright = NavbarNavi;
        Navbar.appendChild(NavbarNavi);


        var NavbarLeft = document.createElement('div');
        NavbarLeft.classList.add('Navigation__list__left');
        NavbarNavi.appendChild(NavbarLeft);


        var Navbarleft_list = document.createElement('ul');
        Navbarleft_list.classList.add('Navigation__list__left__list');
        NavbarLeft.appendChild(Navbarleft_list);

        var Navbarleft_list_item_1 =document.createElement('li');
        Navbarleft_list_item_1.classList.add('Navigation__list__left__list__item');
        Navbarleft_list.appendChild(Navbarleft_list_item_1);

        var Navbarleft_list_item_1_link = document.createElement('a');
        Navbarleft_list_item_1_link.setAttribute('href','#');
        Navbarleft_list_item_1.appendChild(Navbarleft_list_item_1_link);

        var Navbarleft_list_item_1_text = document.createTextNode('Page');
        Navbarleft_list_item_1.appendChild(Navbarleft_list_item_1_text);

        var Navbarleft_list_item_2 =document.createElement('li');
        Navbarleft_list_item_2.classList.add('Navigation__list__left__list__item');
        Navbarleft_list.appendChild(Navbarleft_list_item_2);

        var Navbarleft_list_item_2_link = document.createElement('a');
        Navbarleft_list_item_2_link.setAttribute('href','#');
        Navbarleft_list_item_2.appendChild(Navbarleft_list_item_2_link);

        var Navbarleft_list_item_2_text = document.createTextNode('Inbox');
        Navbarleft_list_item_2.appendChild(Navbarleft_list_item_2_text);

        var Navbarleft_list_item_3 =document.createElement('li');
        Navbarleft_list_item_3.classList.add('Navigation__list__left__list__item');
        Navbarleft_list.appendChild(Navbarleft_list_item_3);

        var Navbarleft_list_item_3_link = document.createElement('a');
        Navbarleft_list_item_3_link.setAttribute('href','#');
        Navbarleft_list_item_3.appendChild(Navbarleft_list_item_3_link);

        var Navbarleft_list_item_3_text = document.createTextNode('Notifications');
        Navbarleft_list_item_3.appendChild(Navbarleft_list_item_3_text);

        var Navbarleft_list_item_4 =document.createElement('li');
        Navbarleft_list_item_4.classList.add('Navigation__list__left__list__item');
        Navbarleft_list.appendChild(Navbarleft_list_item_4);

        var Navbarleft_list_item_4_link = document.createElement('a');
        Navbarleft_list_item_4_link.setAttribute('href','#');
        Navbarleft_list_item_4.appendChild(Navbarleft_list_item_4_link);

        var Navbarleft_list_item_4_text = document.createTextNode('Insights');
        Navbarleft_list_item_4.appendChild(Navbarleft_list_item_4_text);

        var Navbarleft_list_item_5 =document.createElement('li');
        Navbarleft_list_item_5.classList.add('Navigation__list__left__list__item');
        Navbarleft_list.appendChild(Navbarleft_list_item_5);

        var Navbarleft_list_item_5_link = document.createElement('a');
        Navbarleft_list_item_5_link.setAttribute('href','#');
        Navbarleft_list_item_5.appendChild(Navbarleft_list_item_5_link);

        var Navbarleft_list_item_5_text = document.createTextNode('Pushing Tools');
        Navbarleft_list_item_5.appendChild(Navbarleft_list_item_5_text);

        var Navbarleft_list_item_6 =document.createElement('li');
        Navbarleft_list_item_6.classList.add('Navigation__list__left__list__item');
        Navbarleft_list.appendChild(Navbarleft_list_item_6);

        var Navbarleft_list_item_6_link = document.createElement('a');
        Navbarleft_list_item_6_link.setAttribute('href','#');
        Navbarleft_list_item_6.appendChild(Navbarleft_list_item_6_link);

        var Navbarleft_list_item_6_text = document.createTextNode('Add Center');
        Navbarleft_list_item_6.appendChild(Navbarleft_list_item_6_text);
    },

    lognavright:function(){
        var Navright = document.createElement('div');
        Navright.classList.add('Navigation__list__right');
        Header.headerNavright.appendChild(Navright);

        var Navbrightlist = document.createElement('ul');
        Navbrightlist.classList.add('Navigation__list__left__list');
        Navright.appendChild(Navbrightlist);

        var Navbrightlist_list_item_1 =document.createElement('li');
        Navbrightlist_list_item_1.classList.add('Navigation__list__left__list__item');
        Navbrightlist.appendChild(Navbrightlist_list_item_1);

        var Navbrightlist_list_1_link = document.createElement('a');
        Navbrightlist_list_1_link.setAttribute('href','#');
        Navbrightlist_list_item_1.appendChild(Navbrightlist_list_1_link);

        var Navbrightlist_list_item_1_text = document.createTextNode('Settings');
        Navbrightlist_list_1_link.appendChild(Navbrightlist_list_item_1_text);

        var Navbrightlist_list_item_2 =document.createElement('li');
        Navbrightlist_list_item_2.classList.add('Navigation__list__left__list__item');
        Navbrightlist.appendChild(Navbrightlist_list_item_2);

        var Navbrightlist_list_2_link = document.createElement('a');
        Navbrightlist_list_2_link.setAttribute('href','#');
        Navbrightlist_list_item_2.appendChild(Navbrightlist_list_2_link);

        var Navbrightlist_list_item_2_text = document.createTextNode('Help');
        Navbrightlist_list_2_link.appendChild(Navbrightlist_list_item_2_text);

        var Navbrightlist_list_item_icon = document.createElement('i');
        Navbrightlist_list_item_icon.classList.add('fas', 'fa-caret-down');
        Navbrightlist_list_2_link.appendChild(Navbrightlist_list_item_icon);



    },

    render: function () {
        Header.renderHeader();
        Header.renderLogo();
        Header.renderLogoright();
        Header.logonavigation();
        Header.lognavright();
    }
}



