//Setting an Angular module: myApp
angular.module ('myApp',[])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope) {
	$scope.button1Print = ''
	$scope.button1ClickHandler = function () {
		$scope.button1Print = 'Thanks for clicking the button!'
		console.log($scope.button1Print)
	}

	$scope.button2Array = []
	$scope.button2ClickHandler = function () {
		$scope.button2Array = ['hello', 'my', 'friend']
	}

	$scope.headingText = 'This is a heading'
	$scope.headerHoverHandler = function () {
		$scope.headingText += '!' 
	}
}

//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope',mainControllerFunc])