mainModule.controller('signUpController',['$scope',function($scope) {
	$scope.message = "";
	var maxDate = new Date();
	var maxYear = maxDate.getFullYear
	$scope.user = {
		email: "",
		password: "",
		confirmPassword: "",
		fname: "",
		lname: ""
	}
	
	var thisDate = new Date();
    var thisYear = thisDate.getFullYear();
    var thisMonth = thisDate.getMonth()+1;
    if(thisMonth<10){
    	thisMonth = "0"+thisMonth;
    }
    var thisDat= thisDate.getDate();
    var final = thisYear+"-"+thisMonth+"-"+thisDat;
	var notLessThan = new Date();
	notLessThan.setFullYear(thisDate.getFullYear()-14);
        $scope.user.dob = final;
        $scope.dateOptions = {
            minDate: "-150Y",
            maxDate: new Date(notLessThan)
        };
	
	$scope.submit = function(isValid){
		
			if(isValid){
				$scope.message = "Submitted Successfully";
			}else $scope.message = "Items are not yet filled! Please fill it out";
		
	}
	
}]);