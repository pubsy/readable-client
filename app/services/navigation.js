'use strict';

angular.module('myApp.services')

.factory('Navigation',['$http', '$q', function($http, $q){
  return {
    load: function(url){

      var promise = $http({
        method: 'GET',
        url: url,
        headers: {
          'Accept': 'application/vnd.siren+json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      }).then(function(response) {
        return response.data;
      });

      return promise;
    }
  };
}]);
