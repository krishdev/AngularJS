var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //$stateProvider & $urlRouterProvider should be injected in the same manner
  //don't forget to add angular-ui-router.js in your index file
  // 'ui.router' should be injected to the main module
  console.log($stateProvider)
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('parent',{
    abstract: true,
    url: "/parentChild",
    templateUrl: "parentUi.tpl.html",
    controller: "MainCtrl"
  })
  .state('parent.child',{
    url: "/Child",
    templateUrl: "childUi.tpl.html"
  })
  .state('default',{
    url: "/",
    templateUrl: "default.tpl.html"
  });
});

app.controller('MainCtrl', function($scope) {
  $scope.name = "I'm from controller";
});
