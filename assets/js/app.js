var app = angular.module('myApp', ['ui.bootstrap'])


app.config(['$locationProvider', function($locationProvider){

}])


app.controller("MainController", ['$scope', function($scope){
	$scope.test = "HELLOOO";

}])

app.controller("ChangeUserPlanController", ['$scope', function($scope){
	
}])