mainModule.directive('customDatepicker',function($compile){
        return {
            replace:true,
            templateUrl:'partials/custom-datepicker.html',
            scope: {
                ngModel: '=',
                dateOptions: '='
            },
            link: function($scope, $element, $attrs, $controller){
                var $button = $element.find('button');
                var $input = $element.find('input');
                $button.on('click',function(){
                    if($input.is(':focus')){
                        $input.trigger('blur');
                    } else {
                        $input.trigger('focus');
                    }
                });
            }    
        };
    });