var myApp = angular.module('myApp', [
	'ngRoute',
	'myControllers',
  'routeStyles',
  'ngSanitize',
  'ngAnimate',
  'duScroll',
  'ng',
  'ngCookies',
  'pascalprecht.translate',
  'hj.imagesLoaded',
  'angularLazyImg',
  'chart.js'
]);

myApp.config(['$routeProvider', '$locationProvider', '$translateProvider', function($routeProvider, $locationProvider, $translateProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl: 'public/js/views/main.html',
      controller: 'MainController'
    })
    .when('/comercial', {
      templateUrl: 'public/js/views/comercial.html',
      controller: 'comercialController',
      css: ['public/css/main.css','public/css/comercial.css']
    })
    .when('/consumer', {
      templateUrl: 'public/js/views/consumer.html',
      controller: 'consumerController',
      css: ['public/css/main.css','public/css/consumer.css']
    })
    .when('/multibanco_shop', {
      templateUrl: 'public/js/views/multibanco_shop.html',
      controller: 'multibancoshopController',
      css: ['public/css/main.css','public/css/multibanco_shop.css']
    })
    .when('/multibanco_go', {
      templateUrl: 'public/js/views/multibanco_go.html',
      controller: 'multibancogoController',
      css: ['public/css/main.css','public/css/multibanco_go.css']
    })
    .when('/multibanco_digital', {
      templateUrl: 'public/js/views/multibanco_digital.html',
      controller: 'multibancodigitalController',
      css: ['public/css/main.css','public/css/multibanco_digital.css']
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.hashPrefix('');

  var fileNameConvention = {
    prefix: 'public/js/langs/',
    suffix: '.json'
  };

  var langMap = {
      'pt_*' : 'pt',
      'en_*' : 'en'
  };

  $translateProvider
    .useStaticFilesLoader(fileNameConvention)
    .registerAvailableLanguageKeys(['pt', 'en'], langMap)
    .determinePreferredLanguage('pt') // Get the user's system language
    .fallbackLanguage(['pt']) // If their system uses a lang we don't support, fall back to this lang
    .useCookieStorage() // Store the user's lang preference
    .useSanitizeValueStrategy('sanitizeParameters'); // Prevent hacking of interpoloated strings
}]);