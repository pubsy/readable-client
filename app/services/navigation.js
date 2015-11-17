'use strict';

angular.module('myApp')

.factory('Navigation',['$http', '$q', function($http, $q){
  return {
    load: function(){

      var promise = $http({
        method: 'GET',
        url: 'http://localhost:9000/',
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
