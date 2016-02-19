mainModule.controller('signUpController',['$scope',function($scope) {
	$scope.message = "";
	$scope.user = {
		email: "",
		password: "",
		confirmPassword: "",
		fname: "",
		lname: ""
	}
	$scope.submit = function(isValid){
		if(isValid){
			$scope.message = "Submitted Successfully";
		}
		else{
			$scope.message = "Items are not yet filled! Please fill it out";
		}
	}
}]);