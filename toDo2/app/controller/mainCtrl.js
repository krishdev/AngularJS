var mainFunction = function($scope) {
	$scope.submit = function(isValid){
		
			if(isValid){
				$scope.message = "Submitted Successfully";
			}else $scope.message = "Items are not yet filled! Please fill it out";
		
	}
}
mainApp.controller('mainCtrl',['$scope',mainFunction]);

//am passing the submit() function when the form is being submitted. isValid will be true if there are no errors in the Registration page
//also I am binding the message according the value passed on the isValid