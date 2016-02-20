mainModule.directive('modal',function() {
	return {
		template:"partials/modal.tpl.html",
		restrict:"E",
		transclude:true,
		replace:true,
		scope:true,
		link: function(scope,element,attrs){
			scope.title = attrs.title;
		}
	}
});