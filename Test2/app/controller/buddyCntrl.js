mainModule.controller('buddyController',['$scope','buddyFactory','$stateParams',function($scope,buddyFactory,$stateParams) {
	buddyFactory.then(function(response) {
		$scope.buddyDetails = response.data.buddyList;
	})
	/*$scope.getFullDetails = function(id) {
		angular.forEach($scope.buddyDetails, function(buddy){
			if(buddy.id == id){
				$scope.buddyFullDetails = buddy;
			}
		})
	}*/
	
}]);