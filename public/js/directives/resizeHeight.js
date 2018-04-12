myApp.directive('resizeHeight', function ($window, $timeout) {
    return function (scope, element, attrs) {
    	var num = scope.$eval(attrs.factorNumber);
        var num_mob = scope.$eval(attrs.factorNumberMobile);
        var w = angular.element($window);

        $timeout(function(){
            element_new_height = element[0].getBoundingClientRect().width;
            changeHeight();
        }, 0, false);

        var changeHeight = function() {
            if(num_mob!=null){
                if($window.innerWidth<992){
                    element.css('height', $window.innerHeight*num_mob + 'px' ); 
                }
                else{
                    element.css('height', $window.innerHeight*num + 'px' );
                }
            }
            else{
                element.css('height', $window.innerHeight*num + 'px' );
            }
        };

        function onResize(e) {
            scope.$apply(function() { 
                w = angular.element($window);
                changeHeight(); 
            });
        }
        w.on('resize', onResize);
        scope.$on('$destroy', function() {
            w.off('resize', onResize);
        });
    }
});