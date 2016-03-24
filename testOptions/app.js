var testApp = angular.module('testApp',[]);


testApp.controller('mainCtrl',['$scope','getData',function($scope,getData) {
	getData.then(function(response){
		var questIdArray = [];
		var isCorrect = false;
		$scope.responseArray = response.data;
		$scope.displayArray = $scope.responseArray[0];
		questIdArray.push($scope.displayArray.nextQuestionId);
		$scope.sendAnswer = function(questId,val){
			var h = 0;
			var lengthOfArray = $scope.responseArray.length;
			loop:
			for(h;h<lengthOfArray;h++){
				if($scope.responseArray[h].questionId == questId && $scope.responseArray[h].answerid == val){
					isCorrect = true;
				}
				if(isCorrect){
					var i = 0;
					for(i;i<questIdArray.length;i++){
						if(questIdArray[i] != $scope.responseArray[h].nextQuestionId && $scope.responseArray[h].nextQuestionId){
							questIdArray.push($scope.responseArray[h].nextQuestionId);
							$scope.displayArray = $scope.responseArray[h];
							isCorrect = false;
							break loop;
						}
					}
				}
			}
		}
		
	});
}]);

testApp.factory('getData',['$http',function($http){
	return $http.get('data.json');
}]);