var app = angular.module('myApp', ['ui.bootstrap'])


app.config(['$locationProvider', function($locationProvider){

}])


app.controller("MainController", ['$scope', function($scope){
	$scope.test = "HELLOOO";

}])


app.controller("AccountSettingsController", function($scope, $modal){

	$scope.openPasswordModal = function(){
      var $modalInstance = $modal.open({ //Replace template with templateUrl when can deliver via HTTP
        template: "<div class='modal-header'><h4>Change Password</h4></div><div class='modal-body'><label class='control-label'>Password:</label><input class='form-control' type='text' value='*****' /><br /><label class='control-label'>Confirm Password:</label><input class='form-control' type='text' value='*****' /></div><div class='modal-footer'><button class='btn btn-success green' ng-click='cancel()'>Save Password</button><button class='btn btn-default' ng-click='cancel()'>Close</button></div>",
        controller: 'ChangePasswordInstanceController',

      })

      $modalInstance.result.then(function() {
          $log.info('Modal dismissed at: ' + new Date());
        });//modalInstance
    };

});

app.controller('ChangePasswordInstanceController', ['$scope', '$timeout', '$modal', '$modalInstance', '$http', function($scope, $timeout, $modal, $modalInstance, $http){

	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	};

}]);

app.controller("ChangeUserPlanController", ['$scope', function($scope){
	$scope.states = [
		"Alabama",
		"Alaska",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"Florida",
		"Georgia",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Pennsylvania",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming"
	];
	$scope.client = {};
	$scope.client.state = $scope.states[0];

	
}])