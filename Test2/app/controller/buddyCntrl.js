mainModule.controller('buddyController',['$scope','buddyFactory','$uibModal',function($scope,buddyFactory,$uibModal) {
	buddyFactory.then(function(response) {
		$scope.buddyDetails = response.data.buddyList;
	})
	$scope.addBuddy = function(){
		var modalInstance = $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'partials/modal.tpl.html',
                controller: 'addBuddyModalCntrl',
                resolve: {}
            });

            modalInstance.result.then(function() {


            }, function() {

            });
	}
	$scope.newBuddy = {
		"fname": "",
		"lname": "",
		"tel": "",
		"address": "",
		"city": "",
		"state": "",
		"zip": "",
		"id": 0,
		"email": "",
		"username": "",
		"status": "",
		"dob":""
	}
	$scope.requiredBuddyForm = "";
	$scope.submitForm = function(isValid){
		var sizeOfForm = $scope.buddyDetails.length;
		if(isValid){
			$scope.buddyDetails.push({
				"fname": $scope.newBuddy.fname,
				"lname": $scope.newBuddy.lname,
				"tel": $scope.newBuddy.tel,
				"address": $scope.newBuddy.address,
				"city": $scope.newBuddy.city,
				"state": $scope.newBuddy.state,
				"zip": $scope.newBuddy.zip,
				"id": sizeOfForm+1,
				"email": $scope.newBuddy.email,
				"username": $scope.newBuddy.username,
				"status": $scope.newBuddy.status,
				"dob": $scope.newBuddy.dob
			})
			$scope.newBuddy = {
				"fname": "",
				"lname": "",
				"tel": "",
				"address": "",
				"city": "",
				"state": "",
				"zip": "",
				"id": 0,
				"email": "",
				"username": "",
				"status": "",
				"dob":""
			}
		}
		else $scope.requiredBuddyForm = "Things aren't Filled Out Yet";
	}
	
	$scope.deleteBuddyForm = function(bid) {
		var modalInstance = $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'partials/modalDlt.tpl.html',
                controller: 'addBuddyModalCntrl',
                resolve: {}
            });

            modalInstance.result.then(function() {


            }, function() {

            });
		
		$scope.$on('dlt-approval',function(event, args){
			var dlt = args.dlt;
			if(dlt==1){
				angular.forEach($scope.buddyDetails,function(item){
					if(item.id == bid){
						//delete $scope.buddyDetails[bid-1];
						item.status="dlt";
						
					}
				})
			}
		})
	}
	
	$scope.statusArray = [];
	$scope.selectStatus = function(status) {
		console.log('selected status');
		$scope.statusArray = [];
		$scope.statusArray.push(status);
		return false;
	}
	$scope.statusAll = function(statusAll){
		console.log('selected all');
		$scope.statusArray = [];
	}
	
	
}]);

mainModule.controller('addBuddyModalCntrl', function ($scope, $uibModalInstance,$rootScope) {
	$scope.dltSuccessfull = "";
 	$scope.dltIt = function(dlt) {
		$rootScope.$broadcast('dlt-approval',{dlt:'1'});
		$scope.dltSuccessfull = "Deleted";
	}
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});