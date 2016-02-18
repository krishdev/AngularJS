var mainApp = angular.module('myApp', ['ngResource']);
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
mainApp.factory('Indicators',function($resource) {
    return $resource('data.csv');
  });

mainApp.directive('pieChart', function() {
	return{
		restrict: 'E',
		transclude: true,
		replace: true,
		scope : {
			values : '='
		},
		link : function(scope, element, attrs){
			scope.$watch('values',function(values) {
				if(values){
					var width = 960,
					height = 500,
					radius = Math.min(width, height) / 2;

				var color = d3.scale.ordinal()
					.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

				var arc = d3.svg.arc()
					.outerRadius(radius - 10)
					.innerRadius(0);

				var labelArc = d3.svg.arc()
					.outerRadius(radius - 40)
					.innerRadius(radius - 40);

				var pie = d3.layout.pie()
					.sort(null)
					.value(function(d) { return d.population; });

				var svg = d3.select("body").append("svg")
					.attr("width", width)
					.attr("height", height)
				  .append("g")
					.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
					
				
				values.forEach(function(d) {
								d.population = +d.population;
							});
				  var g = svg.selectAll(".arc")
					  .data(pie(values))
					  .enter().append("g")
					  .attr("class", "arc");

				  g.append("path")
					  .attr("d", arc)
					  .style("fill", function(d) { return color(d.data.age); });

				  g.append("text")
					  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
					  .attr("dy", ".35em")
					  .text(function(d) { return d.data.age; });
				}
			})
			
		}
	}
});

mainApp.controller('Ctrl',['$scope','Indicators',function($scope,Indicators) {
    $scope.myData = [20,40,10,45,70];
	$scope.datas = Indicators.query();
}]);