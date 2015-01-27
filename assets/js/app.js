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

app.controller("EventsController", function($scope, $http, $modal){
	//getting dummy data

	$scope.events = [
	{	
		"id": 1,
		"name": "Event 1",
		"group": "CLT Group",
		"rsvps": 23,
		"date": "Monday, December 29, 2014",
		"time": "7:30pm - 9:30pm",
		"location": "Packard Place",
		"desc": "Bitters trust fund readymade, hella raw denim cronut listicle normcore PBR&B. Fashion axe gastropub American Apparel selfies, typewriter bespoke normcore Tumblr cornhole Echo Park cred church-key deep v scenester. Food truck aesthetic gluten-free flannel Pinterest, cardigan raw denim twee chambray scenester butcher. Stumptown twee organic mustache cronut. Portland health goth semiotics craft beer, sriracha food truck flannel synth lo-fi YOLO. Twee Portland pug cred, chia beard four dollar toast sriracha dreamcatcher vegan meh American Apparel fingerstache iPhone. Crucifix Carles pop-up, flannel bicycle rights hashtag food truck keytar irony Vice aesthetic gluten-free fingerstache hoodie."
	},
	{	
		"id": 2,
		"name": "Event 2",
		"group": "CLT Group",
		"rsvps": 44,
		"date": "Monday, December 29, 2014",
		"time": "7:30pm - 9:30pm",
		"location": "Packard Place",
		"desc": "Bitters trust fund readymade, hella raw denim cronut listicle normcore PBR&B. Fashion axe gastropub American Apparel selfies, typewriter bespoke normcore Tumblr cornhole Echo Park cred church-key deep v scenester. Food truck aesthetic gluten-free flannel Pinterest, cardigan raw denim twee chambray scenester butcher. Stumptown twee organic mustache cronut. Portland health goth semiotics craft beer, sriracha food truck flannel synth lo-fi YOLO. Twee Portland pug cred, chia beard four dollar toast sriracha dreamcatcher vegan meh American Apparel fingerstache iPhone. Crucifix Carles pop-up, flannel bicycle rights hashtag food truck keytar irony Vice aesthetic gluten-free fingerstache hoodie."
	},
	{	
		"id": 3,
		"name": "Event 3",
		"group": "CLT Group",
		"rsvps": 10,
		"date": "Monday, December 29, 2014",
		"time": "7:30pm - 9:30pm",
		"location": "Packard Place",
		"desc": "Bitters trust fund readymade, hella raw denim cronut listicle normcore PBR&B. Fashion axe gastropub American Apparel selfies, typewriter bespoke normcore Tumblr cornhole Echo Park cred church-key deep v scenester. Food truck aesthetic gluten-free flannel Pinterest, cardigan raw denim twee chambray scenester butcher. Stumptown twee organic mustache cronut. Portland health goth semiotics craft beer, sriracha food truck flannel synth lo-fi YOLO. Twee Portland pug cred, chia beard four dollar toast sriracha dreamcatcher vegan meh American Apparel fingerstache iPhone. Crucifix Carles pop-up, flannel bicycle rights hashtag food truck keytar irony Vice aesthetic gluten-free fingerstache hoodie."
	},
	{	
		"id": 4,
		"name": "Event 4",
		"group": "CLT Group",
		"rsvps": 88,
		"date": "Monday, December 29, 2014",
		"time": "7:30pm - 9:30pm",
		"location": "Packard Place",
		"desc": "Bitters trust fund readymade, hella raw denim cronut listicle normcore PBR&B. Fashion axe gastropub American Apparel selfies, typewriter bespoke normcore Tumblr cornhole Echo Park cred church-key deep v scenester. Food truck aesthetic gluten-free flannel Pinterest, cardigan raw denim twee chambray scenester butcher. Stumptown twee organic mustache cronut. Portland health goth semiotics craft beer, sriracha food truck flannel synth lo-fi YOLO. Twee Portland pug cred, chia beard four dollar toast sriracha dreamcatcher vegan meh American Apparel fingerstache iPhone. Crucifix Carles pop-up, flannel bicycle rights hashtag food truck keytar irony Vice aesthetic gluten-free fingerstache hoodie."
	},
	{	
		"id": 5,
		"name": "Event 5",
		"group": "CLT Group",
		"rsvps": 9,
		"date": "Monday, December 29, 2014",
		"time": "7:30pm - 9:30pm",
		"location": "Packard Place",
		"desc": "Bitters trust fund readymade, hella raw denim cronut listicle normcore PBR&B. Fashion axe gastropub American Apparel selfies, typewriter bespoke normcore Tumblr cornhole Echo Park cred church-key deep v scenester. Food truck aesthetic gluten-free flannel Pinterest, cardigan raw denim twee chambray scenester butcher. Stumptown twee organic mustache cronut. Portland health goth semiotics craft beer, sriracha food truck flannel synth lo-fi YOLO. Twee Portland pug cred, chia beard four dollar toast sriracha dreamcatcher vegan meh American Apparel fingerstache iPhone. Crucifix Carles pop-up, flannel bicycle rights hashtag food truck keytar irony Vice aesthetic gluten-free fingerstache hoodie."
	}
]

})

app.controller('EditEventModalController', ['$scope', '$modal', function($scope, $modal){
	$scope.openEditEvent = function(selectedEvent){
	  var $modalInstance = $modal.open({ //Replace template with templateUrl when can deliver via HTTP
	    template: "<div class='modal-header'><h4>Edit Event</h4></div><div class='modal-body'><label class='control-label'>Title:</label><input class='form-control' type='text' ng-model='selectedEvent.name' /><br /><label class='control-label'>Group:</label><p><span ng-bind='selectedEvent.group'></span></p></div><div class='modal-footer'><button class='btn btn-success green' ng-click='cancel()'>Save Event</button><button class='btn btn-default red' ng-click='cancel()'>Cancel Changes</button></div><div class='clear-space'></div>",
	    controller: 'EditEventModalInstanceController',
	    resolve: {
			selectedEvent: function(){
				return selectedEvent;
			}
		}//resolve

	  })

	  $modalInstance.result.then(function() {
	      $log.info('Modal dismissed at: ' + new Date());
	    });//modalInstance
	};
}])

//EVENTS Modal
app.controller('EditEventModalInstanceController', ['$scope', '$timeout', '$modal', '$modalInstance', '$http', 'selectedEvent', function($scope, $timeout, $modal, $modalInstance, $http, selectedEvent){

	$scope.selectedEvent = selectedEvent;

	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	};

}]);