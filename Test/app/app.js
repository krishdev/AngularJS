var testApp = angular.module('testApp',['ui.router']);
testApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/test1");
	$stateProvider
    .state('test1', {
      url: "/test1",
      templateUrl: "partial/test1.html"
    })
	.state('test2', {
      url: "/test2",
      templateUrl: "partial/test2.html"
    })
	.state('test3', {
      url: "/test3",
      templateUrl: "partial/test3.html",
		controller: "theController"
    })
	.state('test4', {
      url: "/test4",
      templateUrl: "partial/test4.html",
		controller: "theController"
    });
});