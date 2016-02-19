var mainModule = angular.module('testApp',['ui.router','ngMessages']);
mainModule.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/default");
	$stateProvider
	.state('default', {
      url: "/default",
      templateUrl: "partials/default.tpl.html"
	})
	.state('buddyList', {
      url: "/buddyList",
      templateUrl: "partials/buddyList.tpl.html",
		controller: "buddyController"
	})
	.state('buddyList.details',{
		url: "/:id",
		templateUrl: "buddyDetails.tpl.html",
		controller: function ($scope,$stateParams){
			$scope.buddy = $scope.buddyDetails[$stateParams.id];
		}
	})
    .state('signUp', {
      url: "/signUp",
      templateUrl: "partials/signUp.tpl.html",
		controller:"signUpController",
		controllerAs:"registration"
	});
});