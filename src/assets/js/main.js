'use strict';

// HELPER FUNCTIONS

function scrollTo(elem) {
  $('html, body').animate({
    scrollTop: $(elem).offset().top
  }, 500);
}

function setDayTimes() {
  let now = new Date(),
      hours = now.getHours(),
      bodyClass = '',
      greetingString = 'Hello!';

  if (hours > 20 || hours < 4) {
    bodyClass = 'night';
    greetingString = 'Good night,';
  } else if (hours > 16) {
    bodyClass = 'evening';
    greetingString = 'Good evening,';
  } else if (hours > 11) {
    bodyClass = 'noon';
    greetingString = 'Good afternoon,';
  } else if (hours > 3 ) {
    bodyClass = 'morning';
    greetingString = 'Good morning,';
  }

  $('#js-greeting').text(greetingString);
  $('body').addClass(bodyClass);
}


// Telegram chat init
window.initChat = function() {
  window.Gram.initialize({
    apiKey: "mYuc8v3fLo0icCgWYP8iJPo6y",
    heroColor: "tomato",
    locales: { title: "Let's chat", name: "Sergey" }
  });
}

// Site INIT
window.init = function() {
  $('body').addClass('loaded');
  setDayTimes();

  // Hero dimensions
  $('.main').css('paddingTop', window.innerHeight);
  $(window).resize(() => { $('.main').css('paddingTop', window.innerHeight); });

  // WHILE SCROLLING....
  const $main = $('.main');
  const $nav = $('#nav');
  const $heroContent = $('#hero-content');
  const $heroGreeting = $('#js-greeting');
  const $heroIntro = $('#hero-intro');
  const heroHeight = $('#hero').height();

  let oldScrollPos = 0;
  let scrollDelta = 0;

  $(window).scroll((data) => {

    let scrollPos = $(window).scrollTop();
    scrollDelta = scrollPos - oldScrollPos;
    oldScrollPos = scrollPos;

    // navigation bar
    if (scrollPos > heroHeight*.6) {
      $nav.addClass('nav_alt');
    } else {
      $nav.removeClass('nav_alt');
    }
    if (scrollDelta < -30 && scrollPos > heroHeight+100) {
      $('#nav').addClass('nav_delta');
    } else if (scrollDelta > 3) {
      $('#nav').removeClass('nav_delta');
    }

    if (scrollPos > heroHeight+100) return;

    // hero effects
    let offset = (heroHeight - window.scrollY) / heroHeight;
    $heroContent.css('transform', 'scale(' + (1-(1-offset)/3) + ')' + ' translate(' + (1-offset) * 30 + 'px, -' + (1-offset) * 170 + 'px)');
    $heroGreeting.css('filter', 'blur(' + ((1-offset)*30) + 'px)');
    $heroContent.css('opacity', .1 + offset * offset * offset);
    $heroIntro.css('filter', 'blur(' + ((1-offset)*18) + 'px)');
    $heroIntro.css('transform', 'translate(0, -' + (1-offset) * 70 + 'px)');
  });

  // Navigation animation
  $('.js_nav_link').click((e) => {
    e.preventDefault();
    scrollTo($(e.target).attr('href'));
  });

  // Form handler
  /*
  $("#contact-form").submit((e) => {
    e.preventDefault();
    let $form = $("#contact-form");
    $.post($form.attr("action"), $form.serialize()).then(() =>
      alert("Thank you for contacting me! I'll get back to you with a responce within 24 hours."));
  });
  */

  // Stickybits
  //$('.sticky').stickybits({ useStickyClasses: true });

  // Load webfonts
  WebFont.load({
    google: {
      families: ['Sacramento', 'Montserrat:n3', 'Open Sans:n3,n4,n6']
    }
  });

}
