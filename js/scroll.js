jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});


// ---------------------------

$(function(){
    $(".slideshow").each(function(){
       let slides = $(this).find("img");
       let slideCount = slides.length;
       let currentIndex = 0;
   
       slides.eq(currentIndex).fadeIn();
   
       setInterval(showNextSlide,3000);
   
       function showNextSlide() {
           let nextIndex = (currentIndex  + 1)% slideCount;
           slides.eq(currentIndex).fadeOut();
           slides.eq(nextIndex).fadeIn();
   
           currentIndex = nextIndex;
       }
    });
   });

//    へhedder　スライドショー-----------------------------
$(function() {
    $("#slides").responsiveSlides();
  });

//   hedder nav----------------------------------------------

// 

//   ナビメニュー--------------


