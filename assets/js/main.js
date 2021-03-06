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
    renderPostArea : function() {
        var pageContent = document.createElement('div');
        pageContent.classList.add('pageContent');
        startingPoint_main.appendChild(pageContent);

        var postsArea = document.createElement('div');
        postsArea.classList.add('postsArea');
        pageContent.appendChild(postsArea);

        var createPost = document.createElement('div');
        createPost.classList.add('createPost');
        postsArea.appendChild(createPost);

        var writePost = document.createElement('div');
        writePost.classList.add('writePost');
        createPost.appendChild(writePost);

        // 1 ღილაკი ==========================================    
        var writePostbutton1 = document.createElement('div');
        writePostbutton1.classList.add('writePostbutton');
        writePost.appendChild(writePostbutton1);

        var writePostbuttonimg1 = document.createElement('img');
        writePostbuttonimg1.setAttribute('src', "assets/styles/components/Zimages/createpost/createpost/Pen.png");
        writePostbuttonimg1.setAttribute('alt', "writeposticon");
        writePostbutton1.appendChild(writePostbuttonimg1);

        var writePostbuttonspan1 = document.createElement('span');
        writePostbuttonspan1.innerHTML = 'Create Post';
        writePostbutton1.appendChild(writePostbuttonspan1);

        // 2 ღილაკი ==========================================    
        var writePostbutton2 = document.createElement('div');
        writePostbutton2.classList.add('writePostbutton');
        writePost.appendChild(writePostbutton2);

        var writePostbuttonimg2 = document.createElement('img');
        writePostbuttonimg2.setAttribute('src', "assets/styles/components/Zimages/createpost/createpost/live.png");
        writePostbuttonimg2.setAttribute('alt', "Livevideoicon");
        writePostbutton2.appendChild(writePostbuttonimg2);

        var writePostbuttonspan2 = document.createElement('span');
        writePostbuttonspan2.innerHTML = 'Live';
        writePostbutton2.appendChild(writePostbuttonspan2);

        // 3 ღილაკი ==========================================    
        var writePostbutton3 = document.createElement('div');
        writePostbutton3.classList.add('writePostbutton');
        writePost.appendChild(writePostbutton3);

        var writePostbuttonimg3 = document.createElement('img');
        writePostbuttonimg3.setAttribute('src', "assets/styles/components/Zimages/createpost/createpost/calendar.png");
        writePostbuttonimg3.setAttribute('alt', "Eventscedjolericon");
        writePostbutton3.appendChild(writePostbuttonimg3);

        var writePostbuttonspan3 = document.createElement('span');
        writePostbuttonspan3.innerHTML = 'Event';
        writePostbutton3.appendChild(writePostbuttonspan3);

        // 4 ღილაკი ==========================================    
        var writePostbutton4 = document.createElement('div');
        writePostbutton4.classList.add('writePostbutton');
        writePost.appendChild(writePostbutton4);

        var writePostbuttonimg4 = document.createElement('img');
        writePostbuttonimg4.setAttribute('src', "assets/styles/components/Zimages/createpost/createpost/percent.png");
        writePostbuttonimg4.setAttribute('alt', "makeanoffericon");
        writePostbutton4.appendChild(writePostbuttonimg4);

        var writePostbuttonspan4 = document.createElement('span');
        writePostbuttonspan4.innerHTML = 'Offer';
        writePostbutton4.appendChild(writePostbuttonspan4);

        // 5 ღილაკი ==========================================    
        var writePostbutton5 = document.createElement('div');
        writePostbutton5.classList.add('writePostbutton');
        writePost.appendChild(writePostbutton5);

        var writePostbuttonimg5 = document.createElement('img');
        writePostbuttonimg5.setAttribute('src', "assets/styles/components/Zimages/createpost/createpost/briefcase.png");
        writePostbuttonimg5.setAttribute('alt', "announceajobicon");
        writePostbutton5.appendChild(writePostbuttonimg5);

        var writePostbuttonspan5 = document.createElement('span');
        writePostbuttonspan5.innerHTML = 'Job';
        writePostbutton5.appendChild(writePostbuttonspan5);

// ====================================================================================

        var textArea = document.createElement('div');
        textArea.classList.add('textArea');
        createPost.appendChild(textArea);

        var textAreaimg1 = document.createElement('img');
        textAreaimg1.setAttribute('src', "assets/styles/components/Zimages/createpost/writepost/Dell-logo-small.png");
        textAreaimg1.setAttribute('alt', "delllogo");
        textArea.appendChild(textAreaimg1);        

        var textAreaimg2 = document.createElement('img');
        textAreaimg2.setAttribute('src', "assets/styles/components/Zimages/createpost/writepost/DROPDOWN ICON.png");
        textAreaimg2.setAttribute('alt', "dropdownicon");
        textArea.appendChild(textAreaimg2);

        var textAreaText = document.createElement('textarea');
        textAreaText.setAttribute('placeholder', "Write a post...");
        textAreaText.setAttribute('cols', "60");
        textAreaText.setAttribute('rows', "2");
        textArea.appendChild(textAreaText); 
// ================================================================================
        var addObject = document.createElement('div');
        addObject.classList.add('addObject');
        createPost.appendChild(addObject);

        // 1 ღილაკი ==========================================    

        var addObjectbutton1 = document.createElement('div');
        addObjectbutton1.classList.add('addObjectbutton');
        addObject.appendChild(addObjectbutton1);

        var addObjectbutton1img = document.createElement('img');
        addObjectbutton1img.setAttribute('src', "assets/styles/components/Zimages/createpost/foto/fotouppl.png");
        addObjectbutton1img.setAttribute('alt', "imageuploadicon");
        addObjectbutton1.appendChild(addObjectbutton1img);

        var addObjectbutton1Span = document.createElement('span');
        addObjectbutton1Span.innerHTML = 'Photo/Video';
        addObjectbutton1.appendChild(addObjectbutton1Span);

        // 2 ღილაკი ==========================================    

        var addObjectbutton2 = document.createElement('div');
        addObjectbutton2.classList.add('addObjectbutton');
        addObject.appendChild(addObjectbutton2);

        var addObjectbutton2img = document.createElement('img');
        addObjectbutton2img.setAttribute('src', "assets/styles/components/Zimages/createpost/foto/smile.png");
        addObjectbutton2img.setAttribute('alt', "emotionattachicon");
        addObjectbutton2.appendChild(addObjectbutton2img);

        var addObjectbutton2Span = document.createElement('span');
        addObjectbutton2Span.innerHTML = 'Feeling/Activ...';
        addObjectbutton2.appendChild(addObjectbutton2Span);

        // 3 ღილაკი ==========================================    

        var addObjectbutton3 = document.createElement('div');
        addObjectbutton3.classList.add('addObjectbutton');
        addObject.appendChild(addObjectbutton3);

        var addObjectbutton3img = document.createElement('img');
        addObjectbutton3img.setAttribute('src', "assets/styles/components/Zimages/createpost/foto/location.png");
        addObjectbutton3img.setAttribute('alt', "attachlocationicon");
        addObjectbutton3.appendChild(addObjectbutton3img);

        var addObjectbutton3Span = document.createElement('span');
        addObjectbutton3Span.innerHTML = 'Check in';
        addObjectbutton3.appendChild(addObjectbutton3Span);

        // 4 ღილაკი ==========================================    

        var addObjectbutton4 = document.createElement('div');
        addObjectbutton4.classList.add('addObjectbutton');
        addObject.appendChild(addObjectbutton4);

        var addObjectbutton4img = document.createElement('img');
        addObjectbutton4img.setAttribute('src', "assets/styles/components/Zimages/createpost/foto/menu.png");
        addObjectbutton4img.setAttribute('alt', "menuicon");
        addObjectbutton4.appendChild(addObjectbutton4img);
// ===========================================================================
        var posts = document.createElement('div');
        posts.classList.add('posts');
        postsArea.appendChild(posts);

        var postElements = document.createElement('div');
        postElements.classList.add('postElements');
        posts.appendChild(postElements);

        var companyInfoForPost = document.createElement('div');
        companyInfoForPost.classList.add('companyInfoForPost');
        postElements.appendChild(companyInfoForPost);  
        
        var postLogodiv = document.createElement('div');
        postLogodiv.classList.add('postLogodiv');
        companyInfoForPost.appendChild(postLogodiv);

        var postLogodivimg = document.createElement('img');
        postLogodivimg.setAttribute('src', "assets/styles/components/Zimages/createpost/writepost/Dell-logo-small.png");
        postLogodivimg.setAttribute('alt', "companylogoicon");
        postLogodiv.appendChild(postLogodivimg);

        var postDateAndCompany = document.createElement('div');
        postDateAndCompany.classList.add('postDateAndCompany');
        companyInfoForPost.appendChild(postDateAndCompany);

        var igivegverdi = document.createElement('a');
        igivegverdi.setAttribute('href', "igivegverdi");
        igivegverdi.innerHTML = 'Dell';
        postDateAndCompany.appendChild(igivegverdi);
        
        var postDateAndCompanyspan = document.createElement('span');
        postDateAndCompanyspan.innerHTML = 'September 17 at 9:01 AM';
        postDateAndCompany.appendChild(postDateAndCompanyspan);

        var post = document.createElement('div');
        post.classList.add('post');
        postElements.appendChild(post);    
        
        var postTextDiv = document.createElement('div');
        postTextDiv.classList.add('postTextDiv');
        post.appendChild(postTextDiv);  
        
        var postTextDivP = document.createElement('p');
        postTextDivP.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
        postTextDiv.appendChild(postTextDivP);

        var postFotoDiv = document.createElement('div');
        postFotoDiv.classList.add('postFotoDiv');
        post.appendChild(postFotoDiv);

        var postFotoDivimg = document.createElement('img');
        postFotoDivimg.setAttribute('src', "assets/styles/components/Zimages/posts/COVER IMAGE (1).png");
        postFotoDivimg.setAttribute('alt', "postfoto");
        postFotoDiv.appendChild(postFotoDivimg);

        var postHeadingDiv = document.createElement('div');
        postHeadingDiv.classList.add('postHeadingDiv');
        post.appendChild(postHeadingDiv);

        var postHeadingDivA = document.createElement('a');
        postHeadingDivA.setAttribute('href', "#");
        postHeadingDivA.innerHTML = 'ASYLAB.COM';
        postHeadingDiv.appendChild(postHeadingDivA);

        var postHeadingDivH4 = document.createElement('h4');
        postHeadingDivH4.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry.';
        postHeadingDiv.appendChild(postHeadingDivH4);

        var postButtons = document.createElement('div');
        postButtons.classList.add('postButtons');
        postElements.appendChild(postButtons);

        var postButton1 = document.createElement('div');
        postButton1.classList.add('postButton');
        postButtons.appendChild(postButton1);

        var far_fa_thumbs_up = document.createElement('i');
        // far fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        far_fa_thumbs_up.classList.add('far', 'fa-thumbs-up');
        postButton1.appendChild(far_fa_thumbs_up);

        var postButton1span = document.createElement('span');
        postButton1span.innerHTML = 'Comment';
        postButton1.appendChild(postButton1span);

        // მე-2 ღილაკი =========================================================

        var postButton2 = document.createElement('div');
        postButton2.classList.add('postButton');
        postButtons.appendChild(postButton2);

        var far_fa_comment_alt = document.createElement('i');
        // far fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        far_fa_comment_alt.classList.add('far', 'fa-comment-alt');
        postButton2.appendChild(far_fa_comment_alt);

        var postButton2span = document.createElement('span');
        postButton2span.innerHTML = 'Comment';
        postButton2.appendChild(postButton2span);

        // მე-3 ღილაკი =========================================================
        var postButton3 = document.createElement('div');
        postButton3.classList.add('postButton');
        postButtons.appendChild(postButton3);

        var far_fa_share_square = document.createElement('i');
        // far fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        far_fa_share_square.classList.add('far', 'fa-share-square');
        postButton3.appendChild(far_fa_share_square);

        var postButton3span = document.createElement('span');
        postButton3span.innerHTML = 'Share';
        postButton3.appendChild(postButton3span);
        // ===============================================
        // ეს უცნაური დანამატია, აქ არ უნდა იყოს, საერთოდ ჩემი ჩასმულია ნეტა? და რაში გვჭირდება ცარიელი 
        // <div class="post"></div> -? რამდენიმე ხაზით მაღლაც არის გამოყენებული და სხვა div-ის შვილია იქ..
        // ამაში ხომ არ იწერება ახალი პოსტი?
        var post = document.createElement('div');
        post.classList.add('post');
        posts.appendChild(post); 
        // - ძალიან ურევს და დავაკომენტარე მაგრამ მერე აღვადგინე
    },
    renderRating : function() {
        //  რადგან pageContent უკვე შევქმენით, მაგრამ mainContainer.renderPostArea();
        //  აქ ჩემი აზრით ეს რომ დაგვჭირდა, html არქიტექტურის შეცდომაა (ჩემი)
        var pageContent = document.querySelector('.pageContent');

        var otherpageinfo = document.createElement('div');
        otherpageinfo.classList.add('otherpageinfo');
        pageContent.appendChild(otherpageinfo);

        var rating = document.createElement('div');
        rating.classList.add('rating');
        otherpageinfo.appendChild(rating);

        var ratingimg = document.createElement('img');
        ratingimg.setAttribute('src', "assets/styles/components/Zimages/otherinfo/ICON.png");
        ratingimg.setAttribute('alt', "ratingicon");
        rating.appendChild(ratingimg);
        
        var ratingspan = document.createElement('span');
        ratingspan.innerHTML = 'No Rating Yet';
        rating.appendChild(ratingspan);
        
        var story = document.createElement('div');
        story.classList.add('story');
        otherpageinfo.appendChild(story);

        var storyimg = document.createElement('img');
        storyimg.setAttribute('src', "assets/styles/components/Zimages/otherinfo/COVER IMAGE.png");
        storyimg.setAttribute('alt', "storyfoto");
        story.appendChild(storyimg); 
        
        var storyspan = document.createElement('span');
        storyspan.innerHTML = 'Our story';
        story.appendChild(storyspan);

        var storyA = document.createElement('a');
        storyA.setAttribute('href', "#");
        storyA.innerHTML = '+Tell people about your business';
        story.appendChild(storyA);

        var community = document.createElement('div');
        community.classList.add('community');
        otherpageinfo.appendChild(community);
        
        var communitydivheader = document.createElement('div');
        communitydivheader.classList.add('communitydivheader');
        community.appendChild(communitydivheader);

        var communitydivheaderspan = document.createElement('span');
        communitydivheaderspan.innerHTML = 'Community';
        communitydivheader.appendChild(communitydivheaderspan);

        var communitydivheaderA = document.createElement('a');
        communitydivheaderA.setAttribute('href', "#");
        communitydivheaderA.innerHTML = 'See All';
        communitydivheader.appendChild(communitydivheaderA);

        var communitydivinfo1 = document.createElement('div');
        communitydivinfo1.classList.add('communitydivinfo');
        community.appendChild(communitydivinfo1);

        var fas_fa_thumbs_up = document.createElement('i');
        // fas fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        fas_fa_thumbs_up.classList.add('fas', 'fa-thumbs-up');
        communitydivinfo1.appendChild(fas_fa_thumbs_up);

        var communitydivinfo1Span = document.createElement('span');
        communitydivinfo1Span.innerHTML = '150 people like this';
        communitydivinfo1.appendChild(communitydivinfo1Span);

        var communitydivinfo2 = document.createElement('div');
        communitydivinfo2.classList.add('communitydivinfo');
        community.appendChild(communitydivinfo2);

        var fas_fa_rss = document.createElement('i');
        // fas fa-ს გადაცემას დავუკვირდეთ, ორ კლასად გადაეცემა და მძიმით გამოიყოფა!
        fas_fa_rss.classList.add('fas', 'fa-rss');
        communitydivinfo2.appendChild(fas_fa_rss);

        var communitydivinfo2Span = document.createElement('span');
        communitydivinfo2Span.innerHTML = '150 people follow this';
        communitydivinfo2.appendChild(communitydivinfo2Span);
    },
    render : function() {
        mainContainer.renderCover();
        mainContainer.renderCoverButtons();
        mainContainer.renderPostArea();
        mainContainer.renderRating();
    }
}