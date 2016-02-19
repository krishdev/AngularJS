/*var getExcelColumnName = function(colNumber) {
	var colName = "";
	
	do{
		colNumber -= 1;
		colName = String.fromCharCode(65 + (colNumber % 26)) + colName;
		colNumber = (colNumber / 26) >> 0;
	} while(colNumber>0);
	
	return colName;
}

var answer = getExcelColumnName(100);
console.log(answer);*/

/*function NumberToWords(number){
    if (number == 0)
        return "zero";

    if (number < 0)
        return "minus " + NumberToWords(Math.Abs(number));

    var words = "";

    if (number > 0)
    {
		

        var unitsMap =[ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
        var tensMap =[ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

        if (number < 20)
            words = unitsMap[number];
        else
        {
            words = tensMap[number / 10];
            if ((number % 10) > 0)
                words += "-" + unitsMap[number % 10];
        }
    }
    return words;
}

var answer = NumberToWords(12);
console.log(answer);*/
function NumberToWords(number){
	var arrayOfNum = number.split(" ");
	var newArrayNum = [];
	var words = "";
	for(var i = 0; i<arrayOfNum.length;i++ ){
		var ab = parseInt(arrayOfNum[i]);
		if(!isNaN(ab))
			newArrayNum.push(ab);
	}
	for(var i=0;i<newArrayNum.length;i++){
		number = newArrayNum[i];
		if (number == 0)
			return "zero";

		if (number < 0)
			return "minus " + NumberToWords(Math.Abs(number));


		if (number > 0)
		{


			var unitsMap =[ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
			var tensMap =[ "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

			if (number < 20)
				words = unitsMap[number];
			else
			{
				words = tensMap[Math.floor(number / 10)];
				if ((number % 10) > 0){
					words += "-" + unitsMap[number % 10];	
				}
			}
		}
	}
    
    return words;
}

var answer = NumberToWords("21");
console.log(answer);