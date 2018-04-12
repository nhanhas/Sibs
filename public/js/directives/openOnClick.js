myApp.directive('openOnClick', function(){
    return {
        restrict: 'A',
        scope: {
	    	targetEle: '@'
	    },
        link: function(scope,elem){

        	var my_window = angular.element(window);
        	
        	var target_ele = scope.targetEle;
        	var ele_target = angular.element( document.querySelector( target_ele ) );
        	var open = false;

          elem.bind('click', function () {  
          	if(!open){
          		ele_target.css({'width':'100%'});
          		open=!open;
          	}      
        		else{
        			ele_target.css({'width':'0%'});
        			open=!open;
        		}
        		scope.$applyAsync();
          });  
        }
    }
});