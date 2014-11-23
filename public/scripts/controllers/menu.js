'use strict';

/**
 * @ngdoc function
 * @name monashODP.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the monashODP
 */
 angular.module('odp')
 .controller('MenuCtrl', ['$scope', 'unitFactory', function ($scope, unitFactory) {

 	var menuOpen = false;
	var hideMenuDisabled = false;


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

	// For when the screen starts large
	if ( $( window ).width() > 1000 ) {
		menuOpen = true;
		hideMenuDisabled = true;
	}

	// For when the screen size changes
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

	unitFactory.getUnitData()
		.success(function (unitData) {
			$scope.units = unitData; 
			unitFactory.units = unitData;
    })
    .error(function (error) {
      console.log('Unable to load units: ' + error.message);
    });

	$scope.name = 'John Smith';

	// console.log($scope.units);

}]);
