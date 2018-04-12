myApp.directive('animOnScroll', function($timeout){
    return {
        restrict: 'A',
        scope: {
    		targetAnim: '='
	    },
        link: function(scope,elem){
        	var ele_target_enter;
        	var ele_target_leave;
        	var offset_element_enter;
        	var offset_element_leave;

        	var my_window = angular.element(window);
        	var my_window_height;
        	
        	var elementAnim_object = scope.targetAnim;

        	function init(){
        		if(elementAnim_object['enter']){
	        		ele_target_enter = angular.element( document.querySelector( elementAnim_object['targetEnterEle'] ) )[0];
	        		offset_element_enter = ele_target_enter.offsetTop;
	        	}
	        	if(elementAnim_object['leave']){
	        		ele_target_leave = angular.element( document.querySelector( elementAnim_object['targetLeaveEle'] ) )[0];
	        		offset_element_leave = ele_target_leave.offsetTop;
	        	}
	        	my_window_height = my_window.height();
        	}

        	$timeout(function(){
	        	init();
	        	animateOnScroll();
        	}, 10, false);

        	function animateOnScroll() {

		  		windowScrollTop = my_window[0].pageYOffset; 

		  		if(elementAnim_object['enter']){
		  			if(windowScrollTop >= offset_element_enter + elementAnim_object['factorEnter']*my_window_height){
	        			elem.addClass(elementAnim_object['classEnter']);
	        		}
	        		else{
	        			elem.removeClass(elementAnim_object['classEnter']);
	        		}
		  		}

		  		if(elementAnim_object['leave']){
		  			if(windowScrollTop >= offset_element_leave + elementAnim_object['factorLeave']*my_window_height){
	        			elem.addClass(elementAnim_object['classLeave']);
	        		}
	        		else{
	        			elem.removeClass(elementAnim_object['classLeave']);
	        		}
		  		}
			};

			function onResize(e) {
				scope.$apply(function() { 
					my_window = angular.element(window);
					my_window_height = my_window.height();
					init();
  				});
			}

			function onScroll() {     
          		animateOnScroll();
          		scope.$applyAsync();          
	        }

            my_window.on('resize', onResize);
            my_window.on('scroll', onScroll); 
	        scope.$on('$destroy', function() {
	        	my_window.off('resize', onResize);
	        	my_window.off('scroll', onScroll);
	        });
        }
    }
});