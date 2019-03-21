$(document).ready(function() {
    $('input[name=phone]').mask('+7 (000) 000 00 00');

     new WOW().init();

    $('[data-type="background"]').each(function(){
        var $bgobj = $(this); 
        var speed = $bgobj.data('speed');
        $(window).scroll(function() {
            var yPos = $(window).scrollTop() / $bgobj.data('speed');
            var coords = '50% '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    var rellax = new Rellax('.rellax');
    $('.popup-btn').on('click',function(event) {
        event.preventDefault();
        $('.popup-1').fadeIn();
    });

    $('.popup-btn-2').on('click',function(event) {
        event.preventDefault();
        $('.popup-2').fadeIn();
    });

    $('.popup-btn-3').on('click',function(event) {
        event.preventDefault();
        $('.popup-3').fadeIn();
    });

    $('.popup-close').on('click',function(event) {
        event.preventDefault();
        $('.popup-1').fadeOut();
        $('.popup-2').fadeOut();
        $('.popup-3').fadeOut();
    });

    // MediaBox('.mediabox');
})