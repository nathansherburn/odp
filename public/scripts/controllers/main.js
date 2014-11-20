'use strict';

/**
 * @ngdoc function
 * @name monashODP.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monashODP
 */
angular.module('monashODP',[
	'nvd3ChartDirectives',
	'ngRoute',
  	'ngAnimate'
	])

 .config(function($routeProvider, $locationProvider) {
    
    /* Where to direct unmatched urls */
    $routeProvider.otherwise({
      redirectTo: '/'
    })

    /* Where to direct urls */
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/question/:id', {
      templateUrl: 'views/question.html',
      controller: 'QuestionCtrl'
    });


  })

  .controller('MainCtrl', ['$scope','$http',function($scope, $http){


  	
	var Grades =[];
	var gradeCNT = new Array(0,0,0,0,0,0);
	var key;

    $http.get("http://localhost:3000/grades/").success(function(result){


            for (key in result){
                Grades.push(result[key].Grade);
            }


            for (var i = 0; i < Grades.length; i++) {
            if (Grades[i]=="HD") gradeCNT[0]++;
            else if (Grades[i]=="D") gradeCNT[1]++;
            else if (Grades[i]=="C") gradeCNT[2]++;
            else if (Grades[i]=="P") gradeCNT[3]++;
            else if (Grades[i]=="N") gradeCNT[4]++;
            else if (Grades[i]=="WH") gradeCNT[5]++;
            };



            $scope.grades = [
                {
                    key: "HD",
                    y: gradeCNT[0]
                },
                {
                    key: "D",
                    y: gradeCNT[1]
                },
                {
                    key: "C",
                    y: gradeCNT[2]
                },
                {
                    key: "P",
                    y: gradeCNT[3]
                },
                {
                    key: "N",
                    y: gradeCNT[4]
                },
                {
                    key: "WH",
                    y: gradeCNT[5]
                }
            ];

            $scope.xFunction = function(){
                return function(d) {
                    return d.key;
                };
            }
            $scope.yFunction = function(){
                return function(d) {
                    return d.y;
                };
            }
	});

    $http.get("http://localhost:3000/setu/").success(function(result){


           console.log(result[0].UW_1) 
           $scope.setu = [
                {
                    "key": "The unit enabled me to achieve its learning objectives",
                    "color": "#E3E17D",
                    "values": [["UW 1" , result[0].UW_1]]
                },
                {
                    "key": "I found the unit to be intellectually stimulating",
                    "color": "#E3E17D",
                    "values": [["UW 2" , result[0].UW_2]]
                },
                {
                    "key": "The learning resources in this unit supported my studies",
                    "color": "#E3E17D",
                    "values": [["UW 3" , result[0].UW_3]]
                },
                {
                    "key": "The feedback I received in this unit was useful",
                    "color": "#E3E17D",
                    "values": [["UW 4" , result[0].UW_4]]
                },
                {
                    "key": "Overall I was satisfied with the quality of this unit",
                    "color": "#E3E17D",
                    "values": [["UW 5" , result[0].UW_5]]
                }
        ];


});



  }]);


