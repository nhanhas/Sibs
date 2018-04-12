myApp.directive('counter', function($timeout, $interval){
    return {
        restrict: 'A',
        scope: {
    		updatesPerSec: '@'
	    },
        link: function(scope,elem){

        	var tempo = 1000; 
			var updates_per_tempo = scope.updatesPerSec;
			var tempo_intervalo = tempo / updates_per_tempo;

			var d = new Date(), e = new Date(d);

			var msSinceMidnight = e - d.setHours(0,0,0,0);
			var secSinceMidnight = parseInt(msSinceMidnight/1000);

			var valor = secSinceMidnight*updates_per_tempo;

			var timer = function() {
			  valor += 1;
			  elem.html(valor);
			}
			
			$interval(timer, tempo_intervalo);
        }
    }
});