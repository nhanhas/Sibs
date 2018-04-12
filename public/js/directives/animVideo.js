myApp.directive('animVideo', function($timeout){
    return {
        restrict: 'A',
        scope: {
    		targetAnim: '=',
    		targetSib: '@'
	    },
        link: function(scope,elem){
        	var ele_target_enter;
        	var offset_element_enter;

        	var started = false;

        	var my_window = angular.element(window);
        	var my_window_height;
        	
        	var elementAnim_object = scope.targetAnim;
        	var elem_sibvideo = angular.element( document.querySelector( scope.targetSib ) );

        	function init(){
        		if(elementAnim_object['enter']){
	        		ele_target_enter = angular.element( document.querySelector( elementAnim_object['targetEnterEle'] ) )[0];
	        		offset_element_enter = ele_target_enter.offsetTop;
	        	}

	        	my_window_height = my_window.height();
        	}

        	$timeout(function(){
	        	init();
	        	animateOnScroll();
        	}, 0, false);

        	function animateOnScroll() {

		  		windowScrollTop = my_window[0].pageYOffset; 

		  		if(elementAnim_object['enter']){

		  			if(windowScrollTop >= offset_element_enter + elementAnim_object['factorEnter']*my_window_height){
	        			if(!started){
	        				elem.addClass(elementAnim_object['classEnter']);
	        				elem[0].play();
	        				elem.on( "ended", function(){
							    elem.removeClass(elementAnim_object['classEnter']);
							    elem_sibvideo.addClass(elementAnim_object['classEnter']);
							});
							started = true;
	        			}
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