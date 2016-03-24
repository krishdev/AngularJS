describe('test dataCtrl',function() {
	var ctrl, scope, dataObj;
	
	beforeEach(function() {
		module('mainApp');
	});
	
	beforeEach(inject(function($rootScope,$controller){
		scope = $rootScope.$new();
		ctrl = $controller('dataCtrl',{
			$scope:scope
		})
	}));
	
	describe('unit tests',function() {
		//Step3
		it('should have the $scope defined',function() {
			expect(scope).toBeDefined();
		});
		it('$scope should have list of data',function() {
			expect(scope.dataSet.chars.length).toEqual(3);
		});
	});
});