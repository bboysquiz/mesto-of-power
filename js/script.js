$(document).ready(function() {
    $('#nikita-photo').attr('class', 'teachers__image_visible-right');
    $('#nikita-info').attr('class', 'teachers__info teachers__info_visible-right');
    if( $(window).width() >= '767'){
        $('#review1').attr('class', 'reviews__image_visible-right');
    }else{
        $('#mobileReview1').attr('class', 'reviews__image_visible-right_mobile');
    }
    
    // $('body').fullpage({
    //     anchors: ['block1'],
    //     menu: 'header__list',
    //     css3: true,
    //     scrollingSpeed: 1000
    // });
    $('.features__block-2').css('display','none!important')
    $('.features__block-3').css('display','none!important')
    $('.features__block-4').css('display','none!important') 
    $('.features__block-5').css('display','none!important') 
    $('.features__block-6').css('display','none!important')  
});

// ymaps.ready(init);
// function(init){
//     let map = new ymaps.Map('map', {
//         center [59.91300273, 30.29536850],
//         zoom: 17
//     })
// }

$('.button-wrapper').mouseover(function(e){
    if (!e.target.hasAttribute("id")) {
        $('.button').removeClass('button').addClass('button_hover')
        $('.button-wrapper').removeClass('button-wrapper').addClass('button_hover-wrapper')
    }else{
        $(e.target).children('.button').removeClass('button').addClass('button_hover')
        $(e.target).removeClass('button-wrapper').addClass('button_hover-wrapper') 
    }
});
$('.button-wrapper').mouseout(function(e){
    if (!e.target.hasAttribute("id")) {
        $('.button_hover').removeClass('button_hover').addClass('button')
        $('.button_hover-wrapper').removeClass('button_hover-wrapper').addClass('button-wrapper')
    }else{
        $(e.target).children('.button_hover').removeClass('button_hover').addClass('button')
        $(e.target).removeClass('button_hover-wrapper').addClass('button-wrapper') 
    }
});
$('.button-wrapper').mousedown(function(){
    $('.button_hover-wrapper').css('transition','.1s')
    $('.button_hover-wrapper').css('transform','translateY(4px)')
})
$('.button-wrapper').mouseup(function(){
    $('.button_hover-wrapper').css('transition','.1s')
    $('.button_hover-wrapper').css('transform','translateY(0px)')
})


//Начало слайдера преподавателей
let sliderPhotoArray = ['#nikita-photo', '#sergey-photo', '#oleg-photo', '#sasha-photo'];
let sliderInfoArray = ['#nikita-info', '#sergey-info', '#oleg-info', '#sasha-info'];
let i = 0;
let activeSliderPhoto = sliderPhotoArray[i];
let activeSliderInfo = sliderInfoArray[i];
$('.teachers__button-right').click(function(){
    $('.teachers__button-block').css('pointer-events','none');
    if (i == 3) {
        i = 0;
    }else {
        i++;
    }
    $(activeSliderPhoto).attr('class', 'teachers__image_hidden-right');
    $(activeSliderPhoto).css('display','block');
    setTimeout(function(){
        $('.teachers__image_hidden-right').css('display','none');
        $('.teachers__button-block').css('pointer-events','auto')
    }, 500)
    $(activeSliderInfo).attr('class', 'teachers__info teachers__info_hidden-right');
    activeSliderPhoto = sliderPhotoArray[i];
    activeSliderInfo = sliderInfoArray[i];
    $(activeSliderPhoto).attr('class', 'teachers__image_visible-right');
    $(activeSliderInfo).attr('class', 'teachers__info teachers__info_visible-right');
})
$('.teachers__button-left').click(function(){
    $('.teachers__button-block').css('pointer-events','none');
    if (i == 0) {
        i = 3;
    }else {
        i--;
    }
    $(activeSliderPhoto).attr('class', 'teachers__image_hidden-left');
    $(activeSliderPhoto).css('display','block');
    setTimeout(function(){
        $('.teachers__image_hidden-left').css('display','none');
        $('.teachers__button-block').css('pointer-events','auto')
    }, 500)
    $(activeSliderInfo).attr('class', 'teachers__info teachers__info_hidden-left');
    activeSliderPhoto = sliderPhotoArray[i];
    activeSliderInfo = sliderInfoArray[i];
    $(activeSliderPhoto).attr('class', 'teachers__image_visible-left');
    $(activeSliderInfo).attr('class', 'teachers__info teachers__info_visible-left');
})

$('.teachers__button-right').mousedown(function(){
    $('.teachers__button-right').css('transition','.1s')
    $('.teachers__button-right').css('transform','translateY(4px)')
})
$('.teachers__button-right').mouseup(function(){
    $('.teachers__button-right').css('transition','.1s')
    $('.teachers__button-right').css('transform','translateY(0px)')
})
$('.teachers__button-left').mousedown(function(){
    $('.teachers__button-left').css('transition','.1s')
    $('.teachers__button-left').css('transform','translateY(4px)')
})
$('.teachers__button-left').mouseup(function(){
    $('.teachers__button-left').css('transition','.1s')
    $('.teachers__button-left').css('transform','translateY(0px)')
})
//Конец слайдера преподавателей



let questionStatus = 'close'
let currentQuestion
let lastQuestion
$('.questions__button').mousedown(function(e){
    if (questionStatus == 'close'){
        $(e.target).css('transform','rotate(45deg)')
        $(e.target).css('background-color','rgba(169, 169, 169, .2)')
        $(e.target).css('border-radius','50px')
        $(e.target).css('transition','.7s')
        $(e.target).css('transform-origin', 'center')
        currentQuestion = '#' + e.target.getAttribute('id')
        questionStatus = 'open'
        console.log(questionStatus)
        console.log(currentQuestion)
        $(currentQuestion).next().css('display','flex')
        $(currentQuestion).next().css('animation','.5s linear answerAppear')
        $(currentQuestion).parent().next().css('animation','.5s linear questionMovedown')
        if ($(window).width() >= '1440'){
            $(currentQuestion).parent().next().css('margin-top','100px')
        }else if ($(window).width() <= '767') {
            $(currentQuestion).parent().next().css('margin-top','90px')
        }else{
            $(currentQuestion).parent().next().css('margin-top','135px')
        }
        
    }else{
        $(currentQuestion).css('transform','rotate(0deg)')
        $(currentQuestion).css('background','none')
        $(currentQuestion).css('border-radius','none')
        $(currentQuestion).css('transition','.7s')
        $(currentQuestion).css('transform-origin', 'center')
        questionStatus = 'close'
        console.log(questionStatus)
        console.log(currentQuestion)
        $(currentQuestion).next().css('animation','.5s linear answerDisappear')
        $(currentQuestion).parent().next().css('animation','.5s linear questionMoveup')
        $(currentQuestion).parent().next().css('margin-top','0')
        lastQuestion = currentQuestion
        setTimeout(function(){$(lastQuestion).next().css('display','none')}, 500)
        if (currentQuestion != '#' + e.target.getAttribute('id') ) {
            $(e.target).css('transform','rotate(45deg)')
            $(e.target).css('background-color','rgba(169, 169, 169, .2)')
            $(e.target).css('border-radius','50px')
            $(e.target).css('transition','.7s')
            $(e.target).css('transform-origin', 'center')
            $(currentQuestion).next().css('animation','.5s linear answerDisappear')
            $(currentQuestion).parent().next().css('animation','.5s linear questionMoveup')
            $(currentQuestion).parent().next().css('margin-top','0')
            lastQuestion = currentQuestion
            setTimeout(function(){$(lastQuestion).next().css('display','none')}, 500)
            currentQuestion = '#' + e.target.getAttribute('id')
            $(currentQuestion).next().css('display','flex')
            $(currentQuestion).next().css('animation','.5s linear answerAppear')
            $(currentQuestion).parent().next().css('animation','.5s linear questionMovedown')
            if ($(window).width() >= '1440'){
                $(currentQuestion).parent().next().css('margin-top','100px')
            }else if ($(window).width() >= '991'){
                $(currentQuestion).parent().next().css('margin-top','135px')
            }else if ($(window).width() >= '767') {
                $(currentQuestion).parent().next().css('margin-top','135px')
            }else {
                $(currentQuestion).parent().next().css('margin-top','90px')
            }
            questionStatus = 'open'
            console.log(questionStatus)
            console.log(currentQuestion)
        }
    }
    
})




//Начало слайдера отзывов
if ($(window).width() >= '767'){
    let sliderReviewsPhotoArray = ['#review1', '#review2', '#review3'];
    let x = 0;
    let activeReviewsSliderPhoto = sliderReviewsPhotoArray[x];
    $('.reviews__button-right').click(function(){
            $('.reviews__button-block').css('pointer-events','none');
            if (x == 2) {
                x = 0;
            }else {
                x++;
            }
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_hidden-right');
            $(activeReviewsSliderPhoto).css('display','block');
            setTimeout(function(){
                $('.reviews__image_hidden-right').css('display','none');
                $('.reviews__button-block').css('pointer-events','auto')
            }, 500)
            activeReviewsSliderPhoto = sliderReviewsPhotoArray[x];
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_visible-right');
    })
    $('.reviews__button-left').click(function(){
            $('.reviews__button-block').css('pointer-events','none');
            if (x == 0) {
                x = 2;
            }else {
                x--;
            }
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_hidden-left');
            $(activeReviewsSliderPhoto).css('display','block');
            setTimeout(function(){
                $('.reviews__image_hidden-left').css('display','none');
                $('.reviews__button-block').css('pointer-events','auto')
            }, 500)
            activeReviewsSliderPhoto = sliderReviewsPhotoArray[x];
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_visible-left');
    })
}else{
    let sliderReviewsPhotoArray = ['#mobileReview1', '#mobileReview2', '#mobileReview3'];
    let x = 0;
    let activeReviewsSliderPhoto = sliderReviewsPhotoArray[x];
    $('.reviews__button-right').click(function(){
            $('.reviews__button-block').css('pointer-events','none');
            if (x == 2) {
                x = 0;
            }else {
                x++;
            }
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_hidden-right_mobile');
            $(activeReviewsSliderPhoto).css('display','block');
            setTimeout(function(){
                $('.reviews__image_hidden-right_mobile').css('display','none');
                $('.reviews__button-block').css('pointer-events','auto')
            }, 500)
            activeReviewsSliderPhoto = sliderReviewsPhotoArray[x];
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_visible-right_mobile');
    })
    $('.reviews__button-left').click(function(){
            $('.reviews__button-block').css('pointer-events','none');
            if (x == 0) {
                x = 2;
            }else {
                x--;
            }
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_hidden-left_mobile');
            $(activeReviewsSliderPhoto).css('display','block');
            setTimeout(function(){
                $('.reviews__image_hidden-left_mobile').css('display','none');
                $('.reviews__button-block').css('pointer-events','auto')
            }, 500)
            activeReviewsSliderPhoto = sliderReviewsPhotoArray[x];
            $(activeReviewsSliderPhoto).attr('class', 'reviews__image_visible-left_mobile');
    })
}


$('.reviews__button-right').mousedown(function(){
    $('.reviews__button-right').css('transition','.1s')
    $('.reviews__button-right').css('transform','translateY(4px)')
})
$('.reviews__button-right').mouseup(function(){
    $('.reviews__button-right').css('transition','.1s')
    $('.reviews__button-right').css('transform','translateY(0px)')
})
$('.reviews__button-left').mousedown(function(){
    $('.reviews__button-left').css('transition','.1s')
    $('.reviews__button-left').css('transform','translateY(4px)')
})
$('.reviews__button-left').mouseup(function(){
    $('.reviews__button-left').css('transition','.1s')
    $('.reviews__button-left').css('transform','translateY(0px)')
})
//Конец слайдера отзывов



$(window).on('hashchange', function() {
    if (window.location.hash == '#block2'){
        console.log(window.location.hash)
        $('.about__block').css('animation','1s linear appearAbout')
    }
    if (window.location.hash == '#block3'){
        console.log(window.location.hash)
        $('.action__block-list').css('animation','1s linear appearActionBlockList')
        $('.action__caption-block').css('animation','1s linear appearActionCaption')
    }
    if (window.location.hash == '#block4'){
        console.log(window.location.hash)
        $('.interview__title').css('animation','1s linear appearInterviewTitle')
        $('.interview__video').css('animation','1s linear appearInterviewVideo')
    }
    if (window.location.hash == '#block5'){
        console.log(window.location.hash)
        $('.details__title').css('animation','1s linear appearDetailsTitle')
        $('.details__block').css('animation','1s linear appearDetailsBlock')
        $('.details__note').css('animation','1s linear appearDetailsNote')
        $('.details__button-wrapper').css('animation','1s linear appearDetailsWrapper')
        $('.details__triangles-line').css('animation','1s linear appearDetailsWrapper')
    }
    if (window.location.hash == '#block6'){
        console.log(window.location.hash)
        $('.features__title').css('animation','1s linear appearFeaturesTitle')
        $('.features__block-1').css('animation','1s linear appearFeaturesBlock1')
        setTimeout(function(){
            $('.features__block-2').css('display','flex') 
        },500)
        setTimeout(function(){
            $('.features__block-3').css('display','flex') 
        },1000)
        setTimeout(function(){
            $('.features__block-4').css('display','flex') 
        },1500)
        
        if ($(window).width() >= '767') {
            setTimeout(function(){
                $('.features__block-5').css('display','flex') 
            },2000)
            setTimeout(function(){
                $('.features__block-6').css('display','flex') 
            },2500)
        }
        $('.features__block-2').css('animation','1s linear appearFeaturesBlock2')
        $('.features__block-3').css('animation','1s linear appearFeaturesBlock3')
        $('.features__block-4').css('animation','1s linear appearFeaturesBlock4')
        if ($(window).width() >= '767') {
            $('.features__block-5').css('animation','1s linear appearFeaturesBlock5')
            $('.features__block-6').css('animation','1s linear appearFeaturesBlock6')
        }
        
    }
    if (window.location.hash == '#block7'){
        console.log(window.location.hash)
        $('.students__title').css('animation','1s linear appearStudentsTitlies')
        $('.students__subtitle').css('animation','1s linear appearStudentsTitlies')
        $('.students__image').css('animation','1s linear appearStudentsImage')
        $('.students__button-wrapper').css('animation','1s linear appearStudentsWrapper')
        $('.students__triangles-line').css('animation','1s linear appearStudentsWrapper')
    }
    if (window.location.hash == '#block8'){
        console.log(window.location.hash)
        $('.teachers__title').css('animation','1s linear appearTeachersTitle')
        $('.teachers__block').css('animation','1s linear appearTeachersBlock')
    }
    if (window.location.hash == '#block9'){
        console.log(window.location.hash)
        $('.prices__title').css('animation','1s linear appearPricesTitle')
        $('.prices__block').css('animation','1s linear appearPricesBlock')
        $('.prices__block-info').css('animation','1s linear appearPricesBlockInfo')
        $('.prices__button-wrapper').css('animation','1s linear appearPricesWrapper')
        $('.prices__triangles-line').css('animation','1s linear appearPricesWrapper')
    }
    if (window.location.hash == '#block10'){
        console.log(window.location.hash)
        $('.questions__title').css('animation','1s linear appearQuestionsTitle')
        $('.questions__block').css('animation','1s linear appearQuestionsBlock')
    }
    if (window.location.hash == '#block11'){
        console.log(window.location.hash)
        $('.reviews__title').css('animation','1s linear appearReviewsTitle')
        $('.reviews__block').css('animation','1s linear appearReviewsBlock')
    }
    if (window.location.hash == '#block12'){
        console.log(window.location.hash)
        $('.callback__title').css('animation','1s linear appearCallbackTitle')
        $('.callback__block').css('animation','1s linear appearCallbackBlock')
        $('.callback__form').css('animation','1s linear appearCallbackForm')
    }
    if (window.location.hash == '#block13'){
        console.log(window.location.hash)
        $('.marker-text').css('opacity','0');
        $('.marker').css('animation','1.5s ease-out marker');
        setTimeout(function(){
            $('.marker-text').css('opacity','1');
        }, 3000)
        $('.marker-text').css('animation','1.5s ease-out 1.5s marker-text');
    }
});

let burgerStatus = close
let popupOverlayMobileStatus = 'close'

$('#signin').click(function(){
    $('.popup__entrance').css('animation','none')
    $('#overlayEntrance').css('animation','none')
    $('.popup__entrance').css('animation','.6s linear popupShowing')
    $('#overlayEntrance').css('animation','.6s linear popupOverlayShowing')
    $('.popup__entrance').css('display','flex')
    $('#overlayEntrance').css('display','flex')
    console.log('Окно добавилось')
    if (burgerStatus == 'open'){
        $('.header__nav_mobile').css('animation','.6s linear menuHiding')
        $('#overlayBurger').css('animation','.6s linear menuOverlayHiding')
        setTimeout(function(){
            $('.header__nav_mobile').css('display','none')
            $('#overlayBurger').css('display','none')
        }, 600)
        // burgerStatus = 'close'
        // $('.header__burger').css('display','none')
        // popupOverlayMobileStatus = 'open'
    }
})
$('#overlayEntrance').click(function(e){
    if( $(e.target).attr('class') != $('.popup__entrance').attr('class') && $(e.target).attr('class') != $('.popup__entrance-title').attr('class') && $(e.target).attr('class') != $('.popup__entrance-form').attr('class') && $(e.target).attr('class') != $('.popup__entrance-input').attr('class') && $(e.target).attr('class') != $('.popup__button-wrapper').attr('class') && $(e.target).attr('class') != $('.button_hover-wrapper').attr('class') && $(e.target).attr('class') != $('.popup__button').attr('class') && $(e.target).attr('class') != $('.popup__entrance-password').attr('class')){
        $('.popup__entrance').css('animation','.6s linear popupHiding')
        $('#overlayEntrance').css('animation','.6s linear popupOverlayHiding')
        setTimeout(function(){
            $('.popup__entrance').css('display','none')
            $('#overlayEntrance').css('display','none')
        }, 600)
        console.log($(e.target).attr('class'))
        if( popupOverlayMobileStatus = 'open'){
            $('.header__burger').css('display','block')
            popupOverlayMobileStatus = 'close'
        }
    }
})

$('.button-callback').click(function(){
    $('.popup__callback').css('animation','none')
    $('#overlayCallback').css('animation','none')
    $('.popup__callback').css('animation','.6s linear popupShowing')
    $('#overlayCallback').css('animation','.6s linear popupOverlayShowing')
    $('.popup__callback').css('display','flex')
    $('#overlayCallback').css('display','flex')
    console.log('Окно добавилось')
    // $('.header__burger').css('display','none')
    // burgerOverlayMobileStatus = 'open'
})
$('#overlayCallback').click(function(e){
    if( $(e.target).attr('class') != $('.popup__callback').attr('class') && $(e.target).attr('class') != $('.popup__callback-title').attr('class') && $(e.target).attr('class') != $('.popup__callback-form').attr('class') && $(e.target).attr('class') != $('.popup__callback-name').attr('class') && $(e.target).attr('class') != $('.popup__callback-name-child').attr('class') && $(e.target).attr('class') != $('.popup__callback-phone').attr('class') && $(e.target).attr('class') != $('.popup__button-wrapper').attr('class') && $(e.target).attr('class') != $('.popup__button').attr('class') && $(e.target).attr('class') != $('.popup__callback-button-wrapper').attr('class') && $(e.target).attr('class') != $('.button-wrapper').attr('class') && $(e.target).attr('class') != $('.button').attr('class') && $(e.target).attr('class') != $('.button_hover-wrapper').attr('class') && $(e.target).attr('class') != $('.popup__callback-text').attr('class')){ 
            $('.popup__callback').css('animation','.6s linear popupHiding')
            $('.popup__callback-access').css('animation','.6s linear popupHiding')
            $('#overlayCallback').css('animation','.6s linear popupOverlayHiding')
            setTimeout(function(){
                $('.popup__callback').css('display','none')
                $('.popup__callback-access').css('display','none')
                $('#overlayCallback').css('display','none')
            }, 600)
            console.log($(e.target).attr('class'))
            // if ( burgerOverlayMobileStatus = 'open'){
            //     $('.header__burger').css('display','block')
            //     burgerOverlayMobileStatus = 'close'
            // }
    }
})


// $('.header__burger').click(function(){
//     $('.header__nav_mobile').css('animation','none')
//     $('#overlayBurger').css('animation','none')
//     $('.header__nav_mobile').css('animation','.6s linear menuShowing')
//     $('#overlayBurger').css('animation','.6s linear menuOverlayShowing')
//     $('.header__nav_mobile').css('display','flex')
//     $('#overlayBurger').css('display','flex')
//     console.log('Окно добавилось')
//     // burgerStatus = 'open'
//     // $('.header__burger').css('display','none')
//     // burgerOverlayMobileStatus = 'open'

// })
$('#overlayBurger').click(function(e){
    if( $(e.target).attr('class') != $('.header__nav_mobile').attr('class') && $(e.target).attr('class') != $('.header__list_mobile').attr('class') && $(e.target).attr('class') != $('.header__list-item_mobile').attr('class') && $(e.target).attr('class') != $('.header__nav-link_mobile').attr('class')){ 
        $('.header__nav_mobile').css('animation','.6s linear menuHiding')
        $('#overlayBurger').css('animation','.6s linear menuOverlayHiding')
        setTimeout(function(){
            $('.header__nav_mobile').css('display','none')
            $('#overlayBurger').css('display','none')
        }, 600)
        console.log($(e.target).attr('class'))
        burgerStatus = 'close'
        // if ( burgerOverlayMobileStatus = 'open'){
        //     $('.header__burger').css('display','block')
        //     burgerOverlayMobileStatus = 'close'
        // }
        
    }
})

$('.callback-access-ok').click(function(){
    $('.popup__callback-access').css('animation','.6s linear popupHiding')
    $('#overlayCallback').css('animation','.6s linear popupOverlayHiding')
    setTimeout(function(){
        $('.popup__callback-access').css('display','none')
        $('#overlayCallback').css('display','none')
    }, 600)
})




$("#buttonCallbackWrapper").click(function() { //Change
    if ($(".callback__name").val().length != 0 && $(".callback__phone").val().length != 0){
        var th = $(".callback__form");
        console.log(th)
        $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
        }).done(function() {
            $('body').append('<style>.callback__name::placeholder{color:#A1A1A1}</style>')
            $(".callback__name").css('border-color','#A1A1A1')
            $('body').append('<style>.callback__phone::placeholder{color:#A1A1A1}</style>')
            $(".callback__phone").css('border-color','#A1A1A1')
            $('.popup__callback-access').css('animation','.6s linear popupShowing')
            $('.popup__callback-access').css('display','flex')
            $('#overlayCallback').css('animation','none')
            $('#overlayCallback').css('animation','.6s linear popupOverlayShowing')
            $('#overlayCallback').css('display','flex')    
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
        console.log('message has been send')
        });
    }else{
        if ($(".callback__name").val().length == 0) {
            $('body').append('<style>.callback__name::placeholder{color:#F64F59}</style>')
            $(".callback__name").css('border-color','#F64F59')
        }else{
            $('body').append('<style>.callback__name::placeholder{color:#A1A1A1}</style>')
            $(".callback__name").css('border-color','#A1A1A1')
        }
        if ($(".callback__phone").val().length == 0) {
            $('body').append('<style>.callback__phone::placeholder{color:#F64F59}</style>')
            $(".callback__phone").css('border-color','#F64F59')
        }else{
            $('body').append('<style>.callback__phone::placeholder{color:#A1A1A1}</style>')
            $(".callback__phone").css('border-color','#A1A1A1')
        }
    }
    return false;
  });

  $("#buttonCallbackPopupWrapper").click(function() { //Change
    if ($(".popup__callback-name").val().length != 0 && $(".popup__callback-name-child").val().length != 0 && $(".popup__callback-phone").val().length != 0){
        var th = $(".popup__callback-form");
        console.log(th)
        $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
        }).done(function() {
            $('.popup__callback-cross-1').css('visibility','hidden')
            $('.popup__callback-cross-2').css('visibility','hidden')
            $('.popup__callback-cross-3').css('visibility','hidden')
            $('.popup__callback').css('animation','.6s linear popupHiding')
            setTimeout(function(){
                $('.popup__callback').css('display','none')
            }, 600)
            $('.popup__callback-access').css('animation','.6s linear popupShowing')
            $('.popup__callback-access').css('display','flex')
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
          console.log('message has been send')
        });
    }else{
        if ($(".popup__callback-name").val().length == 0) {
            $('.popup__callback-cross-1').css('visibility','visible')
        }else{
            $('.popup__callback-cross-1').css('visibility','hidden')
        }
        if ($(".popup__callback-name-child").val().length == 0) {
            $('.popup__callback-cross-2').css('visibility','visible')
        }else{
            $('.popup__callback-cross-2').css('visibility','hidden')
        }
        if ($(".popup__callback-phone").val().length == 0) {
            $('.popup__callback-cross-3').css('visibility','visible')
        }else{
            $('.popup__callback-cross-3').css('visibility','hidden')
        }
    }
    return false;
  });