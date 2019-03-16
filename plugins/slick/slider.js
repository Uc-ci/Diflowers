$(function(){
 $('.js-stock__list').slick({
	autoplay: true,
	autoplaySpeed: 4000,
	centerMode: true,
	centerPadding: '0',
	slidesToShow: 3
 });
});﻿

$(function(){
 $('.js-reviews__list').slick({
	autoplay: true,
	autoplaySpeed: 4000,
	centerPadding: '0',
	slidesToShow: 1,
	prevArrow: '<img class="slick-arrow slick-prev" src="./img/icon-arrow-reviews.svg" style="width: 42px; height: 42px; z-index: 9999; transform: scale(-1, -1);">',
  	nextArrow: '<img class="slick-arrow slick-next" src="./img/icon-arrow-reviews.svg" style="width: 42px; height: 42px; z-index: 9999; transform: scale(1, 1);">'
 });
});﻿
