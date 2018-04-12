var myControllers = angular.module('myControllers', [
	'duScroll',
    'AngularGM'
]);

myControllers.controller('MainController', ['$scope', '$translate', 'WebService', function myController($scope, $translate, WebService){
    //Dynamic content 
    $scope.pageContent = undefined;

    $scope.changeLanguage = function (key){
    	$translate.use(key);
        $scope.loadContent();
    }

    //Function to load content
    $scope.loadContent = function(){
        WebService.WP_getViewContent('mainpage').then(function(result){
            $scope.pageContent = result.data;
        });
    };

    //Load Content
    $scope.loadContent();
    
    

}]);

myControllers.controller('comercialController', ['$scope', '$translate', '$document', '$location', function myController($scope, $translate, $document, $location){
    /*** change lang ***/
	$scope.changeLanguage = function (key){
    	$translate.use(key);
    }
    
    /*** open sidenav ***/
    var sidenav = angular.element('#mySidenav');
    $scope.openNav = function() {
    	sidenav.css('width', '100%');
    };
    $scope.closeNav = function() {
    	sidenav.css('width', '0%');
    };
    $scope.toTheTop = function() {
		$document.scrollTopAnimated(0, 500);
    };
    $scope.toSection = function(element, $event) {

    	var el = angular.element(document.getElementById(element));

    	$document.scrollToElementAnimated(el, 0, 500);
    };

    $scope.itemsrctwitter='public/images/twitter_logo.png';
    $scope.itemsrcyoutube='public/images/youtube_logo.png';
    $scope.itemsrcupbutton='public/images/up_button.png';

    $scope.itemsrcslideleft='public/images/left_slide.png';
    $scope.itemsrcslideright='public/images/right_slide.png';

    $scope.scrolledover1 = false;
    $scope.scrolledover2 = false;
    $scope.scrolledover3 = false;
    $scope.scrolledover4 = false;
    $scope.scrolledover5 = false;
    $scope.scrolledover6 = false;

    /*** charts ***/
    // $scope.labels = ["2012", "2013", "2014", "2015", "2016", "2017"];
    // $scope.series = ['Compras', 'Levantamentos'];
    // $scope.colors = ["rgba(152,182,219,1)","rgba(60,117,186,1)"];

    // $scope.colors = [
    //         {
    //           backgroundColor: "rgba(152,182,219,1)",
    //           HoverBackgroundColor: "rgba(0,0,0, 1)",
    //           borderColor: "rgba(152,182,219,1)"
    //         },
    //         {
    //           backgroundColor: "rgba(60,117,186,1)",
    //           HoverBackgroundColor: "rgba(0,0,0, 1)",
    //           borderColor: "rgba(60,117,186,1)"
    //         }
    //       ];
    // $scope.data = [
    //     [65, 59, 80, 81, 56, 55, 40],
    //     [28, 48, 40, 19, 86, 27, 90]
    // ];

    // $scope.options = {
    //     responsive: true,
    //     tooltips: {
    //         enabled: true
    //     },
    //     fontSize: 38,
    //     scales: {
    //         xAxes: [{
    //             stacked: true,
    //             barThickness: 15,
    //             gridLines: {
    //                 display:false
    //             }
    //         }],
    //         yAxes: [{
    //             stacked: true,
    //             display: false,
    //             gridLines: {
    //                 display:false
    //             }
    //         }]
    //     }
    // };

    /*** animações ***/
    $scope.animations = {
        obj_seemovie : {
            enter: true,
            leave: false,
            targetEnterEle: '#section1',
            targetLeaveEle: null,
            factorEnter: 0.1,
            factorLeave: null,
            classEnter: 'not_visible',
            classLeave: ''
        },
        obj1 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section1',
            targetLeaveEle: null,
            factorEnter: 0.3,
            factorLeave: null,
            classEnter: 'anim_nav',
            classLeave: ''
        },
        obj2 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: -0.6,
            factorLeave: null,
            classEnter: 'enter_sec2_titles',
            classLeave: ''
        },
        obj3 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: -0.65,
            factorLeave: null,
            classEnter: 'enter_sec2_titles',
            classLeave: ''
        },
        obj4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: -0.4,
            factorLeave: null,
            classEnter: 'enter_sec2_text',
            classLeave: ''
        },
        obj5 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.05,
            factorLeave: null,
            classEnter: 'ng-leave',
            classLeave: ''
        },
        obj6 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section2',
            factorEnter: 0,
            factorLeave: 0.2,
            classEnter: 'section3_enter',
            classLeave: 'section3_leave'
        },
        obj7 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section4',
            targetLeaveEle: '#section4',
            factorEnter: -1.015,
            factorLeave: -0.85,
            classEnter: 'section5_enter',
            classLeave: 'section5_leave'
        },
        obj_footer : {
            enter: true,
            leave: true,
            targetEnterEle: '#section_testimonials',
            targetLeaveEle: '#section_testimonials',
            factorEnter: -1,
            factorLeave: -0.69,
            classEnter: 'sectionFooter_enter',
            classLeave: 'sectionFooter_leave'
        }
    }
}]);

myControllers.controller('consumerController', ['$scope', '$translate', '$document', function myController($scope, $translate, $document, Map){
	$scope.changeLanguage = function (key){
    	$translate.use(key);
    }

    /*** open sidenav ***/
    var sidenav = angular.element('#mySidenav_con');
   
    $scope.openNav = function() {
        sidenav.css('width', '100%');
    };
    $scope.closeNav = function() {
        sidenav.css('width', '0%');
    };
    /*** scroll anim ***/
    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 500);
    };

    $scope.toSection = function(element, $event) {

        var el = angular.element(document.getElementById(element));

        $document.scrollToElementAnimated(el, 0, 500);
    };
    $scope.partition1 = true;
    $scope.partition2 = false;
    $scope.partition3 = false;
    /*** partitions anim ***/
    $scope.chooseService = function(element){
        if(element == 'partition1'){
            $scope.partition1 = true;
            $scope.partition2 = false;
            $scope.partition3 = false;
        }
        else if(element == 'partition2'){
            $scope.partition1 = false;
            $scope.partition2 = true;
            $scope.partition3 = false;
        }
        else if(element == 'partition3'){
            $scope.partition1 = false;
            $scope.partition2 = false;
            $scope.partition3 = true;
        }
    }
    
    $scope.itemsrctwitter='public/images/twitter_logo.png';
    $scope.itemsrcyoutube='public/images/youtube_logo.png';
    $scope.itemsrcupbutton='public/images/up_button.png';

    $scope.itemsrcslideleft='public/images/left_slide.png';
    $scope.itemsrcslideright='public/images/right_slide.png';

    $scope.scrolledover1 = false;
    $scope.scrolledover2 = false;
    $scope.scrolledover3 = false;
    $scope.scrolledover4 = false;
    $scope.scrolledover5 = false;
    $scope.scrolledover6 = false;
    $scope.scrolledover7 = false;
    $scope.scrolledover8 = false;
    $scope.scrolledover9 = false;

    /*** animações ***/
    $scope.animations = {
        obj_seemovie : {
            enter: true,
            leave: false,
            targetEnterEle: '#section1',
            targetLeaveEle: null,
            factorEnter: 0.1,
            factorLeave: null,
            classEnter: 'not_visible',
            classLeave: ''
        },
        obj0 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: -0.3,
            factorLeave: null,
            classEnter: 'enter_sec2_count',
            classLeave: ''
        },
        obj1 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section1',
            targetLeaveEle: null,
            factorEnter: 0.3,
            factorLeave: null,
            classEnter: 'anim_nav',
            classLeave: ''
        },
        obj2 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: -0.6,
            factorLeave: null,
            classEnter: 'enter_sec2_titles',
            classLeave: ''
        },
        obj3 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: -0.65,
            factorLeave: null,
            classEnter: 'enter_sec2_titles',
            classLeave: ''
        },
        obj4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: -0.4,
            factorLeave: null,
            classEnter: 'enter_sec2_text',
            classLeave: ''
        },
        obj5 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.05,
            factorLeave: null,
            classEnter: 'ng-leave',
            classLeave: ''
        },
        obj6 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section2',
            factorEnter: 0,
            factorLeave: 0.25,
            classEnter: 'section3_enter',
            classLeave: 'section3_leave'
        },
        obj7 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section_testimonials',
            targetLeaveEle: '#section_testimonials',
            factorEnter: -0.97,
            factorLeave: -0.57,
            classEnter: 'sectionTests_enter',
            classLeave: 'sectionTests_leave'
        },
        obj8 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section4',
            targetLeaveEle: '#section4',
            factorEnter: -1,
            factorLeave: -0.78,
            classEnter: 'section4_enter',
            classLeave: 'section4_leave'
        },
        obj_footer : {
            enter: true,
            leave: true,
            targetEnterEle: '#section_testimonials',
            targetLeaveEle: '#section_testimonials',
            factorEnter: -0.967,
            factorLeave: -0.66,
            classEnter: 'sectionFooter_enter',
            classLeave: 'sectionFooter_leave'
        },
        obj9 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section4',
            targetLeaveEle: '#section4',
            factorEnter: 0.03,
            factorLeave: 0.21,
            classEnter: 'section5_enter',
            classLeave: 'section5_leave'
        },
        obj10 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section5',
            targetLeaveEle: '#section5',
            factorEnter: 0.03,
            factorLeave: 0.22,
            classEnter: 'section6_enter',
            classLeave: 'section6_leave'
        },
        obj11 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section6',
            targetLeaveEle: '#section6',
            factorEnter: 0.03,
            factorLeave: 0.2,
            classEnter: 'section7_enter',
            classLeave: 'section7_leave'
        }
    }

    /*** GOOGLE Maps ***/
    var mapStyles=[
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#d1dae4"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e2e8ee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#c3cedb"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#c3cedb"
            },
            {
                "gamma": 0.44
            },
            {
                "saturation": -33
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#c3cedb"
            },
            {
                "gamma": 0.77
            },
            {
                "saturation": 65
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "gamma": 0.11
            },
            {
                "weight": 5.6
            },
            {
                "saturation": 99
            },
            {
                "hue": "#0091ff"
            },
            {
                "lightness": -86
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "color": "#8ca2bb",
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "color": "#b1c1d1"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d6dee8"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#566270"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];

    $scope.options = {
        map: {
            center: new google.maps.LatLng(38.772340, -9.160811),
            zoom: 16,
            scrollwheel: false,
            styles: mapStyles,
            disableDefaultUI: false,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        },
        notselected: {
            icon: 'http://sibs-mb.work/public/images/mb_icon.png',
        }
    };

    $scope.multibancos = [
        {
            id: 0,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 4392,
            location: { 
              lat: 38.772287, 
              lng: -9.160471
            }
        },
        {
            id: 1,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 4392,
            location: {
              lat: 38.773624, 
              lng: -9.161565
            }
        },
        {
            id: 2,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 4392,
            location: {
              lat: 38.771867, 
              lng: -9.160439
            }
        },
        {
            id: 3,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 4392,
            location: {
              lat: 38.772751, 
              lng: -9.159372
            }
        },
        {
            id: 4,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 0,
            location: {
              lat: 38.769980, 
              lng: -9.161541
            }
        }, 
        {
            id: 5,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 0,
            location: {
              lat: 38.773124, 
              lng: -9.155104
            }
        }, 
        {
            id: 6,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 0,
            location: {
              lat: 38.773926, 
              lng: -9.155119
            }
        },
        {
            id: 7,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 0,
            location: {
              lat: 38.772073, 
              lng: -9.153986
            }
        },
        {
            id: 8,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 0,
            location: {
              lat: 38.769170, 
              lng: -9.149287
            }
        },
        {
            id: 9,
            markers: {
                 icon: 'http://sibs-mb.work/public/images/mb_icon.png',
            },
            elevationMeters: 0,
            location: {
              lat: 38.770437, 
              lng: -9.167706
            }
        },
    ];

    $scope.getMultibancoOpts = function(multibanco) {
     return angular.extend(
       { title: multibanco.name },
       multibanco.selected ? multibanco.markers :
          multibanco.markers
      );
    };
    
    $scope.selectMultibanco = function(multibanco) {
      if ($scope.multibanco) {
        $scope.multibanco.selected = false;
      }
      $scope.multibanco = multibanco;
      $scope.multibanco.selected = true;

      $scope.$broadcast('gmMarkersUpdate', 'multibancos');
    };
}]);

myControllers.controller('multibancogoController', ['$scope', '$translate', '$document', '$window', '$location',function myController($scope, $translate, $document, $window, $location){
    /*** change lang ***/
    $scope.changeLanguage = function (key){
        $translate.use(key);
    }

    /*** open sidenav ***/
    var sidenav = angular.element('#mySidenav_Go');
   
    $scope.openNav = function() {
        sidenav.css('width', '100%');
    };
    $scope.closeNav = function() {
        sidenav.css('width', '0%');
    };
    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 500);
    };

    $scope.toSection = function(element, $event) {

        var el = angular.element(document.getElementById(element));

        $document.scrollToElementAnimated(el, 0, 500);
    };

    /*** choose ***/
    $scope.smallCom = true;
    $scope.bigCom = false;

    $scope.chooseCompanie = function(element){
        if(element == 'small'){
            $scope.smallCom = true;
            $scope.bigCom = false;
        }
        else if(element == 'big'){
            $scope.smallCom = false;
            $scope.bigCom = true;
        }
    }
    
    $scope.itemsrctwitter='public/images/twitter_logo.png';
    $scope.itemsrcyoutube='public/images/youtube_logo.png';
    $scope.itemsrcupbutton='public/images/up_button.png';

    $scope.itemsrcslideleft='public/images/left_slide.png';
    $scope.itemsrcslideright='public/images/right_slide.png';

    $scope.scrolledover1 = false;
    $scope.scrolledover2 = false;
    $scope.scrolledover3 = false;
    $scope.scrolledover4 = false;
    $scope.scrolledover5 = false;
    $scope.scrolledover6 = false;

    /*** animações ***/
    $scope.animations = {
        obj_mobile1 : {
            enter: true,
            leave: true,
            extra: false,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section3',
            factorEnter: 0,
            factorLeave: -0.7,
            factorStop: -0.02,
            classEnter: 'fixe_mobile',
            classLeave: '',
        },
        obj_video1 : {
            enter: true,
            targetEnterEle: '#section3',
            factorEnter: 0.5,
            classEnter: 'visible'
        },
        obj1 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section1',
            targetLeaveEle: null,
            factorEnter: 0.3,
            factorLeave: null,
            classEnter: 'anim_nav',
            classLeave: ''
        },
        obj2 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section2',
            factorEnter: 0,
            factorLeave: 0.22,
            classEnter: 'section3_enter',
            classLeave: 'section3_leave'
        },
        obj_footer : {
            enter: true,
            leave: true,
            targetEnterEle: '#section_testimonials',
            targetLeaveEle: '#section_testimonials',
            factorEnter: -1,
            factorLeave: -0.69,
            classEnter: 'sectionFooter_enter',
            classLeave: 'sectionFooter_leave'
        },
        obj4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.1,
            factorLeave: null,
            classEnter: 'invis_text3',
            classLeave: ''
        },
        obj_hor4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.5,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor5 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.55,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        },
        obj_hor6 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.65,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor7 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.7,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        },
        obj_hor8 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.8,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor9 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.85,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        },
        obj_hor10 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.95,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor11 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 1,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        }
    }
}]);

myControllers.controller('multibancoshopController', ['$scope', '$translate', '$document', '$window', '$location',function myController($scope, $translate, $document, $window, $location){
    /*** change lang ***/
    $scope.changeLanguage = function (key){
        $translate.use(key);
    }

    /*** open sidenav ***/
    var sidenav = angular.element('#mySidenav_Shop');
   
    $scope.openNav = function() {
        sidenav.css('width', '100%');
    };
    $scope.closeNav = function() {
        sidenav.css('width', '0%');
    };
    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 500);
    };

    $scope.toSection = function(element, $event) {

        var el = angular.element(document.getElementById(element));

        $document.scrollToElementAnimated(el, 0, 500);
    };
    
    $scope.itemsrctwitter='public/images/twitter_logo.png';
    $scope.itemsrcyoutube='public/images/youtube_logo.png';
    $scope.itemsrcupbutton='public/images/up_button.png';

    $scope.itemsrcslideleft='public/images/left_slide.png';
    $scope.itemsrcslideright='public/images/right_slide.png';

    $scope.scrolledover1 = false;
    $scope.scrolledover2 = false;
    $scope.scrolledover3 = false;
    $scope.scrolledover4 = false;
    $scope.scrolledover5 = false;
    $scope.scrolledover6 = false;

    /*** animações ***/
    $scope.animations = {
        obj_mobile1 : {
            enter: true,
            leave: true,
            extra: false,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section3',
            factorEnter: 0,
            factorLeave: -0.7,
            factorStop: -0.02,
            classEnter: 'fixe_mobile',
            classLeave: '',
        },
        obj1 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section1',
            targetLeaveEle: null,
            factorEnter: 0.3,
            factorLeave: null,
            classEnter: 'anim_nav',
            classLeave: ''
        },
        obj2 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section2',
            factorEnter: 0,
            factorLeave: 0.22,
            classEnter: 'section3_enter',
            classLeave: 'section3_leave'
        },
        obj_footer : {
            enter: true,
            leave: true,
            targetEnterEle: '#section_testimonials',
            targetLeaveEle: '#section_testimonials',
            factorEnter: -1,
            factorLeave: -0.69,
            classEnter: 'sectionFooter_enter',
            classLeave: 'sectionFooter_leave'
        },
        obj4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.1,
            factorLeave: null,
            classEnter: 'invis_text3',
            classLeave: ''
        },
        obj_hor4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.5,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor5 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.55,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        },
        obj_hor6 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.65,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor7 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.7,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        },
        obj_hor8 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.8,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor9 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.85,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        }
    }
}]);

myControllers.controller('multibancodigitalController', ['$scope', '$translate', '$document', '$window', '$location',function myController($scope, $translate, $document, $window, $location){
    /*** change lang ***/
    $scope.changeLanguage = function (key){
        $translate.use(key);
    }

    /*** open sidenav ***/
    var sidenav = angular.element('#mySidenav_Digital');
   
    $scope.openNav = function() {
        sidenav.css('width', '100%');
    };
    $scope.closeNav = function() {
        sidenav.css('width', '0%');
    };
    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 500);
    };

    $scope.toSection = function(element, $event) {

        var el = angular.element(document.getElementById(element));

        $document.scrollToElementAnimated(el, 0, 500);
    };
    
    $scope.itemsrctwitter='public/images/twitter_logo.png';
    $scope.itemsrcyoutube='public/images/youtube_logo.png';
    $scope.itemsrcupbutton='public/images/up_button.png';

    $scope.itemsrcslideleft='public/images/left_slide.png';
    $scope.itemsrcslideright='public/images/right_slide.png';

    $scope.scrolledover1 = false;
    $scope.scrolledover2 = false;
    $scope.scrolledover3 = false;
    $scope.scrolledover4 = false;
    $scope.scrolledover5 = false;
    $scope.scrolledover6 = false;

    /*** animações ***/
    $scope.animations = {
        obj_mobile1 : {
            enter: true,
            leave: true,
            extra: false,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section3',
            factorEnter: 0,
            factorLeave: -0.7,
            factorStop: -0.02,
            classEnter: 'fixe_mobile',
            classLeave: '',
        },
        obj1 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section1',
            targetLeaveEle: null,
            factorEnter: 0.3,
            factorLeave: null,
            classEnter: 'anim_nav',
            classLeave: ''
        },
        obj2 : {
            enter: true,
            leave: true,
            targetEnterEle: '#section2',
            targetLeaveEle: '#section2',
            factorEnter: 0,
            factorLeave: 0.22,
            classEnter: 'section3_enter',
            classLeave: 'section3_leave'
        },
        obj_footer : {
            enter: true,
            leave: true,
            targetEnterEle: '#section_testimonials',
            targetLeaveEle: '#section_testimonials',
            factorEnter: -1,
            factorLeave: -0.69,
            classEnter: 'sectionFooter_enter',
            classLeave: 'sectionFooter_leave'
        },
        obj4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.1,
            factorLeave: null,
            classEnter: 'invis_text3',
            classLeave: ''
        },
        obj_hor4 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.5,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor5 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.55,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        },
        obj_hor6 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.65,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor7 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.7,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        },
        obj_hor8 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.8,
            factorLeave: null,
            classEnter: 'move_horizontal_left',
            classLeave: ''
        },
        obj_hor9 : {
            enter: true,
            leave: false,
            targetEnterEle: '#section2',
            targetLeaveEle: null,
            factorEnter: 0.85,
            factorLeave: null,
            classEnter: 'move_horizontal_right',
            classLeave: ''
        }
    }
}]);