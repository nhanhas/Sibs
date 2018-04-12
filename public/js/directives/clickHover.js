myApp.directive('clickHover', function($timeout, $interval){
    return {
        restrict: 'A',
        link: function(scope,elem){

        	var flagHover = false;
        	var pch = elem.find('.page_container_hover');
        	var vl = elem.find('.vertical_line');
        	var pct = elem.find('.page_container_title');
        	var pctext = elem.find('.page_container_text');
        	var eb = elem.find('.exception_button');

        	elem.bind('click', function() {
        		if(!flagHover){
            		pch.addClass('pch');
            		vl.addClass('vl');
            		pct.addClass('pct');
            		pctext.addClass('pctext');
            		eb.addClass('eb');

            		flagHover=true;
        		}
           		else{
           			pch.removeClass('pch');
            		vl.removeClass('vl');
            		pct.removeClass('pct');
            		pctext.removeClass('pctext');
            		eb.removeClass('eb');

           			flagHover=false;
           		}
        	});
        	elem.on('mouseenter', function() {
                pch.addClass('pch');
        		vl.addClass('vl');
        		pct.addClass('pct');
        		pctext.addClass('pctext');
        		eb.addClass('eb');
            });
            elem.on('mouseleave', function() {
                pch.removeClass('pch');
        		vl.removeClass('vl');
        		pct.removeClass('pct');
        		pctext.removeClass('pctext');
        		eb.removeClass('eb');
            });
        }
    }
});