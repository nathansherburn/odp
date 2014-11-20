'use strict';

/**
 * @ngdoc function
 * @name monashODP.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the monashODP
 */
 angular.module('monashODP')
 .controller('MenuCtrl', function ($scope) {

 	var menuOpen = false;
	var hideMenuDisabled = false;

	if ( $( window ).width() > 1000 ) {
		menuOpen = true;
		hideMenuDisabled = true;
	}

 	$(".menu-button").click(function(){
		if (!hideMenuDisabled) {
 			if (menuOpen) {
 				menuOpen = false;
 				$(".side-menu").animate({left:'-300px'});
 				$(".menu-button").animate({left:'0px'});
 			} else {
 				menuOpen = true;
 				$(".side-menu").animate({left:'0px'});
 				$(".menu-button").animate({left:'300px'});
 			}
		}
 	});

	$( window ).resize(function() {
		if ( $( window ).width() > 1000 ){
			menuOpen = true;
			hideMenuDisabled = true;
			$(".menu-button").css({'display': 'none', 'left': '0px'});
			$(".side-menu").css('left', '0px');
		} else if ( $( window ).width() <= 1000 ){
			menuOpen = false;
			hideMenuDisabled = false;
			$(".menu-button").css('display', 'block');
			$(".side-menu").css('left', '-300px');
		}
	});

});
