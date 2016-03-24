dateModule.controller('dateCtrl',['$scope',function($scope) {
	var today = new Date();
	var thisMonth = today.getMonth()+1;
	if(thisMonth < 10){
	  thisMonth = "0"+thisMonth;
	}
	var confirm = today.getFullYear()+"-"+thisMonth +"-"+today.getDate();

	    //$scope.date = new Date(confirm);
		//$scope.getMinDate=new Date('2016/04/07');
	$scope.$watch('getMinDate',function(newValue){
		$scope.dateOptions = {
				minDate: newValue,
				maxDate: "+1Y"
			}
	});
	$scope.dateOptions = {
            minDate: today,
            maxDate: "+1Y"
        }
	$scope.minOptions = {
		minDate:today,
		maxDate:"+1Y",
		onClose:function(){
			$scope.dateOptions.minDate = $scope.getMinDate;
		}
	}
}]);