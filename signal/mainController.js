var execFun = function($scope) {
	$scope.toggleMe = function(){
		console.log('inside');
		if(!$('#sig2Red').hasClass('red1')){
			$('#sig2Red').addClass('red1')
			$('#sig1Green').addClass('green1');
			
			$('#sig1Red').removeClass('red1')
			$('#sig2Green').removeClass('green1');
		}else{
			$('#sig1Red').addClass('red1')
			$('#sig2Green').addClass('green1');
			$('#sig2Red').removeClass('red1')
			$('#sig1Green').removeClass('green1');
		}
	}
	setInterval(function(){ 
		if($('#sig1Red').hasClass('red1')){
			$('#sig2Green').addClass('green1');
		} 
	   setTimeout(function(){
		   if(!$('#sig2Red').hasClass('red1')){
			$('#sig2Red').addClass('red1')
			$('#sig1Green').addClass('green1');
			
			$('#sig1Red').removeClass('red1')
			$('#sig2Green').removeClass('green1');
		}else{
			$('#sig1Red').addClass('red1')
			$('#sig2Green').addClass('green1');
			$('#sig2Red').removeClass('red1')
			$('#sig1Green').removeClass('green1');
		}
	   },2500)

	},5000);
}
mainApp.controller('mainCtrl',['$scope',execFun]);