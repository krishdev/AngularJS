mainModule.factory('buddyFactory',['$http',function($http) {
	return $http.get('app/data/buddyList.json');
}]);