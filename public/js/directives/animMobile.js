myApp.directive('animMobile', function($timeout, $window){
    return {
        restrict: 'A',
        scope: {
    		targetAnim: '='
	    },
        link: function(scope,elem){
        	var ele_target_enter;
        	var ele_target_leave;
        	var ele_target_extra;
        	var offset_element_enter;
        	var offset_element_leave;
        	var offset_element_extra;

        	var my_window = angular.element(window);
        	var my_window_height;
        	// var doc_height;

        	var section2_height;

        	var lastScrollTop = 0;
        	
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
	        	if(elementAnim_object['extra']){
	        		ele_target_extra = angular.element( document.querySelector( elementAnim_object['targetExtraEle'] ) )[0];
	        		offset_element_extra = ele_target_extra.offsetTop;
	        	}

	        	my_window = angular.element(window);
        		my_window_height = my_window.height();
        		// doc_height = $(document).height();

        		section2_height = angular.element( document.querySelector( '#section2' ) )[0].getBoundingClientRect().height;
        	}
        	
        	$timeout(function(){
	        	init();
	        	animateOnScroll();
        	}, 0, false);

        	function animateOnScroll() {

		  		windowScrollTop = my_window[0].pageYOffset;
		  		sectionScrollTop = angular.element( document.querySelector( '#section2' ) )[0].getBoundingClientRect().top; 

			   	var mobile_init_position = -my_window_height - 222;
			   	var mobile_init_position_tablet = -my_window_height -300;
			   	var mobile_init_position_mobile = -my_window_height -420;

			   	if($window.innerWidth>992){
			   		elem.css('display', 'block');
			   		if(elementAnim_object['enter']){
			  			if(windowScrollTop >= offset_element_enter + elementAnim_object['factorEnter']*my_window_height){
		        			elem.addClass(elementAnim_object['classEnter']);
		        			elem.css('top', '-222px' );
		        		}
		        		else{
		        			elem.removeClass(elementAnim_object['classEnter']);
		        			elem.css('top', mobile_init_position+'px' );
		        		}
			  		}
			  		if(elementAnim_object['leave']){

			  			if(windowScrollTop >= offset_element_leave + elementAnim_object['factorLeave']*my_window_height && windowScrollTop <= offset_element_leave+elementAnim_object['factorStop']*my_window_height){
		         			// var scrollPercent = 100 * windowScrollTop / ( doc_height - my_window_height );
		         			var sectionPercent = - 100 * sectionScrollTop / section2_height;

					       	var new_top = sectionPercent - 58.5;
					        elem.css({'top':new_top+'%', 'display':'block'});
		        		}
		        		else if(windowScrollTop > offset_element_leave+elementAnim_object['factorStop']*my_window_height){
		        			elem.removeClass(elementAnim_object['classEnter']);
		        			elem.css({'top':'37%'});
		        		}
			  		}    		
			   	}
		   		else {
		   			elem.css('display', 'none');
		   		}
			};

			function onResize(e) {
				scope.$apply(function() { 
					init();
					animateOnScroll();
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