
$(document).ready(function () {
    $('#hamNavToggler').click(function () {
        $("#navDrawer").addClass('slideStyleIn');
        $("#crossNavToggler").toggle();
        $("#hamNavToggler").toggle();
    });
    $('#crossNavToggler').click(function () {

        $("#crossNavToggler").toggle();
        $("#hamNavToggler").toggle();
        $("#navDrawer").removeClass('slideStyleIn');

    });
});



$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(50).fadeOut('slow');
    $('body').delay(0).css({ 'overflow': 'visible' });
})
!function (e) {
    e("body").scrollspy({ target: "#mainNav", offset: 76 }); function a() {
        40 < e("#mainNav").
            offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    } a(), e(window).scroll(a)
}(jQuery)


var bdy = document.getElementById('page-top');
var headerC = document.getElementById('headerC')
var hamNavSlide = document.getElementById('navDrawer')
var hamBurger = document.getElementById('hamNavToggler')
var cross = document.getElementById('crossNavToggler')
var linkies = document.getElementsByClassName('hamNavItem')

hamBurger.addEventListener("click", function () {
    headerC.style.opacity = '0.6'
    hamNavSlide.classList.remove('slideStyleOut')
    hamNavSlide.classList.add('slideStyleIn')
    hamBurger.style.display = 'none';
    cross.style.display = 'block'
    bdy.classList.add('lock-scroll')
})



cross.addEventListener("click", function () {
    hamNavSlide.classList.remove('slideStyleIn')
    hamNavSlide.classList.add('slideStyleOut')
    hamBurger.style.display = 'block';
    cross.style.display = 'none'
    headerC.style.opacity = '1';
    bdy.classList.remove('lock-scroll')
})


for (let i = 0; i < linkies.length; i++) {
    linkies[i].addEventListener('click', function () {
        hamNavSlide.classList.remove('slideStyleIn');
        hamNavSlide.classList.add('slideStyleOut');
        hamBurger.style.display = 'block';
        cross.style.display = 'none';
        headerC.style.opacity = '1';
        bdy.classList.remove('lock-scroll')
    })
}