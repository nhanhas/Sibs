myApp.directive('resizeWidth', function ($window, $timeout) {
    return function (scope, element, attrs) {
    	var num = scope.$eval(attrs.factorNumber);
        var w = angular.element($window);

        $timeout(function(){
            element_new_height = element[0].getBoundingClientRect().width;
            changeWidth();
        }, 0, false);

        var changeWidth = function() {element.css('width', w.width()*num + 'px' );};

        function onResize(e) {
            scope.$apply(function() { 
                w = angular.element($window);
                changeWidth(); 
            });
        }
        w.on('resize', onResize);
        scope.$on('$destroy', function() {
            w.off('resize', onResize);
        });
    }
});