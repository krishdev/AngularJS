mainModule.filter('fnameFilter', function(){
	
	return function(buddyDetails, statusArray){
		console.log('entered Filter');
		if(!angular.isUndefined(buddyDetails) && !angular.isUndefined(statusArray) && statusArray.length > 0){
			var out = [];
			angular.forEach(statusArray,function(item){
				angular.forEach(buddyDetails, function(buddy) {
					if(buddy.status == item){
						out.push(buddy);
					}			
				})
			})
			
			return out;
		}
		else{
			return buddyDetails;
		}
	}
});