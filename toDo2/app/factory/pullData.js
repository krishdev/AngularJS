mainApp.factory('pullData',['$http', function($http){
	  return $http.get('app/data/data.json');
}]);

//This is nothing but an angular service provider. $http is XMLHttpRequest
//Using callback functions at the controllers we can get the data.