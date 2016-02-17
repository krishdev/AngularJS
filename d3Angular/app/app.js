var mainApp = angular.module('myApp', []);
  mainApp.directive('barsChart', function ($parse) {
     var directiveDefinitionObject = {
         restrict: 'E',
         replace: false,
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           var chart = d3.select(element[0]);
            chart.append("div").attr("class", "chart")
             .selectAll('div')
             .data(scope.data).enter().append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });
         } 
      };
      return directiveDefinitionObject;
   });

mainApp.controller('Ctrl',['$scope',function($scope) {
    $scope.myData = [20,40,10,45,70];
}]);