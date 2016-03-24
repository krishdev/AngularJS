var mainFunction = function($scope,pullData) {
	$scope.welcome = " Krishna";
	$scope.dataArray = [];
	pullData.then(function(response) {
		$scope.dataSet = response.data;
	});
}
mainApp.controller('mainCtrl',['$scope','pullData',mainFunction]);