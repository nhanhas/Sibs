myApp.directive('activeOnScroll', function($timeout){
    return {
        restrict: 'A',
        scope: {
	    	scrolledoover: '='
	    },
        link: function(scope,elem){

        	var my_window = angular.element(window);
        	var offset_element;

	        $timeout(function(){
	        	offset_element = elem.offset().top;
	        	activeOnScroll();
        	}, 0, false);
        	
        	scope.scrolledoover=false;

			function activeOnScroll() {
				windowScrollTop = my_window[0].pageYOffset; 
		    	if(windowScrollTop >= offset_element && windowScrollTop < offset_element+elem[0].getBoundingClientRect().height){
		    		scope.scrolledoover=true;
		    	}
		    	else{
		    		scope.scrolledoover=false;
		    	}
			};

			function onScroll() {     
          		activeOnScroll();
          		scope.$applyAsync();          
	        }

            my_window.on('scroll', onScroll); 
	        scope.$on('$destroy', function() {
	        	my_window.off('scroll', onScroll);
	        });
        }
    }
});