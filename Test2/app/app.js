var mainModule = angular.module('testApp',['ui.router','ngMessages','ui.bootstrap','ui.date']);
mainModule.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/default");
	$stateProvider
	.state('default', {
      url: "/default",
      templateUrl: "partials/default.tpl.html"
	})
	.state('buddy', {
	  abstract: true,
      url: "/buddy",
      templateUrl: "partials/buddy.html",
		controller: "buddyController"
	})
	.state('buddy.buddyList', {
      url: "/List",
      templateUrl: "partials/buddy.list.tpl.html"
	})
	.state('buddy.buddydetails',{
		url: "/:id",
		templateUrl: "partials/buddy.details.tpl.html",
		controller: function ($scope,$stateParams){
			$scope.buddy = $scope.buddyDetails[$stateParams.id-1];
		}
	})
    .state('signUp', {
      url: "/signUp",
      templateUrl: "partials/signUp.tpl.html",
		controller:"signUpController",
		controllerAs:"registration"
	});
});