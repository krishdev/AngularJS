var mainApp = angular.module("mainApp",[]);
mainApp.directive("toggleTab",function(){
	
	var accordArray = [];
	return{
		restrict:"AE",
		templateUrl:"cutomTab.html",
		scope:{
			accordTitle:"@accordTitle",
			accordContent:"@accordContent"
		},
		controller: function(){
				this.addAccord = function(accord){
					accordArray.push(accord);
				};
				this.showOnlyOneAccord = function( accord ){
					angular.forEach(accordArray, function(oneAccord){
						if(oneAccord != accord){
							oneAccord.isContentHidden = false;
						}
					});
				};
		},
		link: function(scope, element, attrs, toggleTabController){
			/*element.bind('click',function(){
				scope.$apply(function(){
					scope.$eval(attrs.toggleTab);
				});
			});*/
			scope.isContentHidden = false;
			toggleTabController.addAccord(scope);
			scope.toggleContent = function(){
				scope.isContentHidden = !scope.isContentHidden;
				toggleTabController.showOnlyOneAccord(scope);
			};
		}
		
	};
});