var mainApp = angular.module('mainApp',['ui.router','ngMessages']);
mainApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/default");
	$stateProvider
	.state('default', {
      url: "/default",
      templateUrl: "partials/default.tpl.html"
	})
	.state('data', {
      url: "/data",
      templateUrl: "partials/showData.html",
		controller: "dataCtrl"
	})
	.state('signUp', {
      url: "/signUp",
      templateUrl: "partials/registration.html",
		controller: "mainCtrl"
	})
	.state('problem1', {
      url: "/problem1",
      templateUrl: "partials/problem1.html",
		controller: "dataCtrl"
	});
});

//This could also acheived by using regular ng-router or using custome directives. I had shown that am aware of nested views too. 
//Otherwise-Default is used to redirect to the default page if urls are passed other than the defined state urls.