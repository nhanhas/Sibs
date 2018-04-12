myApp.directive('doSquare', function ($window, $timeout) {
    return function (scope, element) {
        var w = angular.element($window);
        var element_new_height;

        function changeHeight(element_new_height) {element.css('height', element_new_height + 'px' );};

        function onResize(e) {
            scope.$apply(function() { 
                element_new_height = element[0].getBoundingClientRect().width;
                changeHeight(element_new_height); 
            });
        }

        w.on('resize', onResize);
        scope.$on('$destroy', function() {
            w.off('resize', onResize);
        });

        $timeout(function(){
            element_new_height = element[0].getBoundingClientRect().width;
            changeHeight(element_new_height);
        }, 0, false);
    }
});