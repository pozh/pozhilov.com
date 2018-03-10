/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function scrollTo(a){$('html, body').animate({scrollTop:$(a).offset().top},500)}function setDayTimes(){var a=new Date,b=a.getHours(),c='',d='Hello!';20<b||4>b?(c='night',d='Good night,'):16<b?(c='evening',d='Good evening,'):11<b?(c='noon',d='Good afternoon,'):3<b&&(c='morning',d='Good morning,'),console.log(d),$('#js-greeting').text(d),$('body').addClass(c)}window.init=function(){$('body').addClass('loaded'),setDayTimes(),$('.main').css('paddingTop',window.innerHeight),$(window).resize(function(){$('.main').css('paddingTop',window.innerHeight)});var a=$('.main'),b=$('#nav'),c=$('#hero-content'),d=$('#js-greeting'),f=$('#hero-intro'),g=$('#hero').height(),h=0,i=0;$(window).scroll(function(){var k=$(window).scrollTop();if(i=k-h,h=k,k>.6*g?b.addClass('nav_alt'):b.removeClass('nav_alt'),-30>i&&k>g+100?$('#nav').addClass('nav_delta'):3<i&&$('#nav').removeClass('nav_delta'),!(k>g+100)){var l=(g-window.scrollY)/g;c.css('transform','scale('+(1-(1-l)/3)+') translate('+30*(1-l)+'px, -'+170*(1-l)+'px)'),d.css('filter','blur('+30*(1-l)+'px)'),c.css('opacity',.1+l*l*l),f.css('filter','blur('+18*(1-l)+'px)'),f.css('transform','translate(0, -'+70*(1-l)+'px)')}}),$('.js_nav_link').click(function(j){j.preventDefault(),scrollTo($(j.target).attr('href'))}),$('#contact-form').submit(function(j){j.preventDefault();var k=$('#contact-form');$.post(k.attr('action'),k.serialize()).then(function(){return alert('Thank you for contacting me! I\'ll get back to you with a responce within 24 hours.')})}),WebFont.load({google:{families:['Sacramento','Montserrat:300','Open+Sans:300,400,600']}})};

/***/ })
/******/ ]);