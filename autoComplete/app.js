angular.module('autoApp',[]);
angular.module('autoApp').controller('mainCtrl',['$scope','fetchResult','fetchResultCountry',function($scope, fetchResult,fetchResultCountry){
    $scope.names = ["krishna","Joe","John","kumar","Johnson","JohnDoe"];
    $scope.usStates = [];
    fetchResult.success(function(response){
        $scope.usStates = response;
    });
    fetchResultCountry.success(function(response){
        $scope.countries = response;
    });
    $scope.renderedNames = [];
    $scope.txtName = "";
    $scope.$watch('txtName',function(newTxt, oldTxt){
        var newt = $scope.txtName.toLowerCase();
        if(newTxt != oldTxt){
            $scope.renderedNames = [];
        }
        if(newt.length > 1){
			$scope.renderedNames = autoFill($scope.usStates, $scope.renderedNames, newt);
        }
    });
           
    $scope.fillTxt = function(name){
        $scope.txtName = name;
        $scope.renderedNames = [];
    }
	/*countries*/
	$scope.renderedCountries = [];
    $scope.txtCountry = "";
    $scope.$watch('txtCountry',function(newTxt, oldTxt){
        var newt = $scope.txtCountry.toLowerCase();
        if(newTxt != oldTxt){
            $scope.renderedCountries = [];
        }
        if(newt.length > 1){
           $scope.renderedCountries = autoFill($scope.countries, $scope.renderedCountries, newt);
        }
    });
	$scope.fillCountry = function(name){
        $scope.txtCountry = name;
        $scope.renderedCountries = [];
    }
	function autoFill(contentArray, listArray, newTxt){
	var j = 0;
	angular.forEach(contentArray,function(item){
			var name = item.name.toLowerCase(),
				nameIndex = name.indexOf(newTxt);
			if(nameIndex != -1){
				do{
					if(listArray.length > 0 && j < listArray.length){
						var renderCountry = listArray[j].toLowerCase(),
							renderCountryIndex = renderCountry.indexOf(name);
						if(renderCountryIndex == -1)
							listArray.push(name);
						else if(renderCountryIndex != -1 && renderCountry.length != newTxt.length){
							listArray.push(name);
						}
					}else{
						listArray.push(name);
					}
					j++;
				}while(j < listArray.length);
			}
	});
	return listArray;
}
}]);
angular.module('autoApp').factory('fetchResult',function($http){
    return $http.get('states.json');
});
angular.module('autoApp').factory('fetchResultCountry',function($http){
    return $http.get('country.json');
});
angular.module('autoApp').directive('customKeydown',function(){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
            element.bind('keydown','.listRendered li',function(e){
                var list = angular.element($(this)).parents().closest(".autoFillContainer").find(".listRendered li");
                if (e.keyCode == 40) {   
					angular.element($(this)).parents().closest(".autoFillContainer").find(".listRendered li").first().focus();
                    return false;
                } else if (e.keyCode == 38) {   
                    list.prev().focus();
                    return false;
                }
            });
        }
    }
});
angular.module('autoApp').directive('liKeydown',function(){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
			
            element.bind('focus',function(){
                var list = angular.element($(this));
				if(list.length != 0){
					list.addClass('active').siblings().removeClass();
				}
            });
            element.bind('keydown',function(e){
                var list = angular.element($(this));
                if (e.keyCode == 40) {   
                    list.next().focus();
                    return false;
                } else if (e.keyCode == 38) {   
                    list.prev().focus();
                    return false;
                }
            });
        }
    }
});
angular.module('autoApp').directive('liEnter',function(){
	return{
		 restrict:'A',
        link:function(scope,element,attrs){
            element.bind('keydown',function(e){
                if (e.keyCode == 13) {
					scope.$apply(function(){
						scope.$eval(attrs.liEnter);
					});
				}
            });
	}
}
});