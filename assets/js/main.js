var startingPoint_main = document.querySelector('.mainInfoContainer');

var mainContainer = {
    renderCover : function() {
        var coverFoto = document.createElement('div');
        coverFoto.classList.add('coverFoto');
        startingPoint_main.appendChild(coverFoto);

        var image = document.createElement('img');
        image.setAttribute('src', "assets/styles/components/Zimages/dell cover.jpg");
        image.setAttribute('alt', "coverimage");
        var coverFotoAdd = document.querySelector('.coverFoto');
        coverFotoAdd.appendChild(image);
    },
// ================================================================================
    renderCoverButtons : function() {
        var coverButtonsdiv = document.createElement('div');
        coverButtonsdiv.classList.add('coverButtonsdiv');
        startingPoint_main.appendChild(coverButtonsdiv);

        var coverButtonsWrapper = document.createElement('div');
        coverButtonsWrapper.classList.add('coverButtonsWrapper');
        coverButtonsdiv.appendChild(coverButtonsWrapper);

        var leftCoverButtonsdiv = document.createElement('div');
        leftCoverButtonsdiv.classList.add('leftCoverButtonsdiv');
        coverButtonsWrapper.appendChild(leftCoverButtonsdiv);
        
        // 1 ღილაკი ==========================================
        var leftCoverButton1 = document.createElement('div');
        leftCoverButton1.classList.add('leftCoverButton');
        leftCoverButtonsdiv.appendChild(leftCoverButton1);

        var leftCoverButtonA1 = document.createElement('a');
        leftCoverButtonA1.setAttribute('href', "?")
        leftCoverButtonA1.classList.add('leftCoverButtonA');
        leftCoverButton1.appendChild(leftCoverButtonA1);

        var leftCoverButtonSpan1_1 = document.createElement('span');
        leftCoverButtonSpan1_1.classList.add('leftCoverButtonSpan');
        leftCoverButtonA1.appendChild(leftCoverButtonSpan1_1);

        var fas_fa_thumbs_up = document.createElement('i');
        // fas fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        fas_fa_thumbs_up.classList.add('fas', 'fa-thumbs-up');
        leftCoverButtonSpan1_1.appendChild(fas_fa_thumbs_up);

        var leftCoverButtonSpan1_2 = document.createElement('span');
        leftCoverButtonSpan1_2.classList.add('leftCoverButtonSpan');
        leftCoverButtonSpan1_2.innerHTML = 'Like';
        leftCoverButtonA1.appendChild(leftCoverButtonSpan1_2);
        // 2 ღილაკი ==========================================
        var leftCoverButton2 = document.createElement('div');
        leftCoverButton2.classList.add('leftCoverButton');
        leftCoverButtonsdiv.appendChild(leftCoverButton2);

        var leftCoverButtonA2 = document.createElement('a');
        leftCoverButtonA2.setAttribute('href', "?");
        leftCoverButtonA2.classList.add('leftCoverButtonA');
        leftCoverButton2.appendChild(leftCoverButtonA2);

        var leftCoverButtonSpan2_1 = document.createElement('span');
        leftCoverButtonSpan2_1.classList.add('leftCoverButtonSpan');
        leftCoverButtonA2.appendChild(leftCoverButtonSpan2_1);

        var fas_fa_rss = document.createElement('i');
        // fas fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        fas_fa_rss.classList.add('fas', 'fa-rss');
        leftCoverButtonSpan2_1.appendChild(fas_fa_rss);

        var leftCoverButtonSpan2_2 = document.createElement('span');
        leftCoverButtonSpan2_2.classList.add('leftCoverButtonSpan');
        leftCoverButtonSpan2_2.innerHTML = 'Follow';
        leftCoverButtonA2.appendChild(leftCoverButtonSpan2_2);
        // 3 ღილაკი ==========================================    
        var leftCoverButton3 = document.createElement('div');
        leftCoverButton3.classList.add('leftCoverButton');
        leftCoverButtonsdiv.appendChild(leftCoverButton3);

        var leftCoverButtonA3 = document.createElement('a');
        leftCoverButtonA3.setAttribute('href', "?");
        leftCoverButtonA3.classList.add('leftCoverButtonA');
        leftCoverButton3.appendChild(leftCoverButtonA3);

        var leftCoverButtonSpan3_1 = document.createElement('span');
        leftCoverButtonSpan3_1.classList.add('leftCoverButtonSpan');
        leftCoverButtonA3.appendChild(leftCoverButtonSpan3_1);

        var fas_fa_share = document.createElement('i');
        // fas fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        fas_fa_share.classList.add('fas', 'fa-share');
        leftCoverButtonSpan3_1.appendChild(fas_fa_share);

        var leftCoverButtonSpan3_2 = document.createElement('span');
        leftCoverButtonSpan3_2.classList.add('leftCoverButtonSpan');
        leftCoverButtonSpan3_2.innerHTML = 'Share';
        leftCoverButtonA3.appendChild(leftCoverButtonSpan3_2);
        // 4 ღილაკი ==========================================    
        var leftCoverButton4 = document.createElement('div');
        leftCoverButton4.classList.add('leftCoverButton');
        leftCoverButtonsdiv.appendChild(leftCoverButton4);

        var leftCoverButtonA4 = document.createElement('a');
        leftCoverButtonA4.setAttribute('href', "?");
        leftCoverButtonA4.classList.add('leftCoverButtonA');
        leftCoverButton4.appendChild(leftCoverButtonA4);

        var leftCoverButtonSpan4_1 = document.createElement('span');
        leftCoverButtonSpan4_1.classList.add('leftCoverButtonSpan');
        leftCoverButtonA4.appendChild(leftCoverButtonSpan4_1);

        var fas_fa_ellipsis_h = document.createElement('i');
        // fas fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        fas_fa_ellipsis_h.classList.add('fas', 'fa-ellipsis-h');
        leftCoverButtonSpan4_1.appendChild(fas_fa_ellipsis_h);

        var rightCoverButtonsdiv = document.createElement('div');
        rightCoverButtonsdiv.classList.add('rightCoverButtonsdiv');
        coverButtonsWrapper.appendChild(rightCoverButtonsdiv);

        var rightCoverButton = document.createElement('div');
        rightCoverButton.classList.add('rightCoverButton');
        rightCoverButtonsdiv.appendChild(rightCoverButton);

        var rightCoverButtonA = document.createElement('a');
        rightCoverButtonA.setAttribute('href', "?");
        rightCoverButtonA.classList.add('rightCoverButtonA');
        rightCoverButton.appendChild(rightCoverButtonA);

        var rightCoverButtonSpan1 = document.createElement('span');
        rightCoverButtonSpan1.classList.add('rightCoverButtonSpan');
        rightCoverButtonSpan1.innerHTML = 'Learn More';
        rightCoverButtonA.appendChild(rightCoverButtonSpan1);

        var rightCoverButtonSpan2 = document.createElement('span');
        rightCoverButtonSpan2.classList.add('rightCoverButtonSpan');
        rightCoverButtonA.appendChild(rightCoverButtonSpan2);

        var fas_fa_pen = document.createElement('i');
        // fas fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        fas_fa_pen.classList.add('fas', 'fa-pen');
        rightCoverButtonSpan2.appendChild(fas_fa_pen);
    },
    renderCreatePost : function() {

    },
    renderRating : function() {

    },
    render : function() {
        mainContainer.renderCover();
        mainContainer.renderCoverButtons();
        mainContainer.renderCreatePost();
        mainContainer.renderRating();
    }
}