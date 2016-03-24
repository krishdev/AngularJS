var mainFunction = function($scope,pullData) {
	$scope.welcome = " Krishna";
	pullData.then(function(response) {
		$scope.dataSet = response.data;
	});
}
mainApp.controller('dataCtrl',['$scope','pullData',mainFunction]);

//I am using factory(angular providers) $http(XMLHTTPREQUEST) for getting data from the file(.json formate)
//and passing the data to an scope object called dataSet which could be used to bind the same at the view.