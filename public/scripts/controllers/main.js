angular.module('odp').
controller('MainCtrl', [
    '$scope',
    '$http',
    '$routeParams',
    'unitFactory',
    function($scope, $http, $routeParams, unitFactory) {


				var findUnit = function () {
					$scope.unit=unitFactory.units[0];
    			for (var i = 0, len = unitFactory.units.length; i < len; i++) {
      			if (unitFactory.units[i]._id === $routeParams.id) {
        			$scope.unit = unitFactory.units[i];
     		   	};
      		}
   			};

				findUnit();

        var result = $scope.unit.grades;


        $scope.grades = [{
            key: "HD",
            y: result.HD
        }, {
            key: "D",
            y: result.D
        }, {
            key: "C",
            y: result.C
        }, {
            key: "P",
            y: result.P
        }, {
            key: "N",
            y: result.N
        }, {
            key: "WH",
            y: result.WH
        }];

        $scope.xFunction = function() {
            return function(d) {
                return d.key;
            };
        }
        $scope.yFunction = function() {
            return function(d) {
                return d.y;
            };
        }


        var result1 = $scope.unit.setu;


        $scope.setu = [{
            "key": "The unit enabled me to achieve its learning objectives",
            "color": "#E3E17D",
            "values": [
                ["UW 1", result1.objectives]
            ]
        }, {
            "key": "I found the unit to be intellectually stimulating",
            "color": "#E3E17D",
            "values": [
                ["UW 2", result1.stimulating]
            ]
        }, {
            "key": "The learning resources in this unit supported my studies",
            "color": "#E3E17D",
            "values": [
                ["UW 3", result1.resources]
            ]
        }, {
            "key": "The feedback I received in this unit was useful",
            "color": "#E3E17D",
            "values": [
                ["UW 4", result1.feedback]
            ]
        }, {
            "key": "Overall I was satisfied with the quality of this unit",
            "color": "#E3E17D",
            "values": [
                ["UW 5", result1.quality]
            ]
        }];


    }
]);

