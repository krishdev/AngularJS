testApp.controller('theController',['$scope',function($scope) {
	$scope.resultExcel = "";
	$scope.inputExcel = "";
	$scope.stringReplNum = "";
	$scope.getExcelColumnName = function(colNumber) {
		if(!isNaN(colNumber)){
			if(colNumber>0){
				var colName = "";

				do{
					colNumber -= 1;
					colName = String.fromCharCode(65 + (colNumber % 26)) + colName;
					colNumber = (colNumber / 26) >> 0;
				} while(colNumber>0);

				$scope.resultExcel = colName;
			}
			else $scope.resultExcel = 'Enter a valid input';
		}
		else $scope.resultExcel = 'Enter a valid number';
	}
	
	$scope.getStringReplacesNumber = function NumberToWords(number){
	var arrayOfNum = number.split(" ");
	var newArrayNum = [];
	var wordArray = [];
	var words = "";
	for(var i = 0; i<arrayOfNum.length;i++ ){
		var ab = parseInt(arrayOfNum[i]);
		if(!isNaN(ab))
			newArrayNum.push(ab);
		else newArrayNum.push(arrayOfNum[i]);
	}
	for(var i=0;i<newArrayNum.length;i++){
		if(!isNaN(newArrayNum[i])){
			number = newArrayNum[i];
			if (number == 0)
				 $scope.stringToNumber = "zero";

			if (number < 0)
				 $scope.stringToNumber = "minus " + NumberToWords(Math.Abs(number));


			if (number > 0)
			{


				var unitsMap =[ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
				var tensMap =[ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];
				words = "";
				if (number < 20){
					words += unitsMap[number];
					wordArray.push(words);
				}
				else
				{
					words += tensMap[Math.floor(number / 10)];
					if ((number % 10) > 0){
						words += "-" + unitsMap[number % 10];	
						wordArray.push(words);
					}
					else{
					wordArray.push(words);
					}
				}
			}
		}
		else{
			wordArray.push(newArrayNum[i]);
		}
	}
    wordArray = wordArray.join(" ");
    $scope.stringToNumber = wordArray;
}

}]);