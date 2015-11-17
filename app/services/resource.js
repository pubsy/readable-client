'use strict';

angular.module('myApp')

.factory('Resource',['$http', '$q', function($http, $q){
  return {
    load: function(url, data){

      var promise = $http({
        method: 'GET',
        url: url,
        data: data,
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
