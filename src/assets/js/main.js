'use strict';

$('body').addClass('loaded');

// HELPER FUNCTIONS

function scrollTo(elem) {
  $('html, body').animate({
    scrollTop: $(elem).offset().top
  }, 500);
}


//-------------------------------------------------------------


// Hero dimensions
$('.main').css('paddingTop', window.innerHeight);
$(window).resize(() => { $('.main').css('paddingTop', window.innerHeight); });


// WHILE SCROLLING....
const $main = $('.main');
const $heroContent = $('#hero-content');
const $heroGreeting = $('#hero-greeting');
const $heroIntro = $('#hero-intro');
const heroHeight = $('#hero').height();

$(window).scroll((data) => {

  // navigation bar
  if ($(window).scrollTop() > heroHeight*.6) {
    $('#nav').addClass('nav_alt');
  } else {
    $('#nav.nav_alt').removeClass('nav_alt');
  }

  // hero effects
  let offset = (heroHeight - window.scrollY) / heroHeight;
  $heroContent.css('transform', 'scale(' + (1-(1-offset)/3) + ')' + ' translate(' + (1-offset) * 30 + 'px, -' + (1-offset) * 170 + 'px)');
  $heroGreeting.css('filter', 'blur(' + ((1-offset)*30) + 'px)');
  $heroGreeting.css('opacity', .1 + offset * offset * offset);
  $heroIntro.css('filter', 'blur(' + ((1-offset)*18) + 'px)');
  $heroIntro.css('opacity', .2 + offset * offset * offset);
  $heroIntro.css('transform', 'translate(0, -' + (1-offset) * 70 + 'px)');
});

// Navigation animation
$('.js_nav_link').click((e) => {
  e.preventDefault();
  scrollTo($(e.target).attr('href'));
});
