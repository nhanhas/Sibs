/**
 * This Service will hold all the needed Requests
 * and some manipulations to return to Frontend 
 */
myApp.service('WebService', ['$http', '$translate', function($http, $translate) {
    
    //base API - 0: language; 1: section page
    this.baseApi = 'http://sibs-mb.work/wp/api/?l={0}&section={1}';

    //Get page structure from Request - http://sibs-mb.work/wp/api/?l=PT&section=mainpage
    this.WP_getViewContent = function (section){
        let serviceURL = this.baseApi.replace('{0}', $translate.use()).replace('{1}', section);
        return this.Http_GET(serviceURL).then(function(result){
            return result;
        });
    }

    //GET Type
    this.Http_GET  = function(serviceURL){
        return $http({
                    method: 'GET',
                    url: serviceURL
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(response) {
                    return undefined;
                });
    }

}]);