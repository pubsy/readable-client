'use strict';

angular.module('myApp.navigation', [])

.directive('navigation', function(){
  return {
    restrict: 'E',
    templateUrl: 'navigation/navigation.html',
    controller: ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {

      $scope.isAuthenticated = function(pane) {
        return AuthenticationService.isAuthenticated();
      };

      $scope.logout = function(pane) {
        AuthenticationService.logout();

        var url = $scope.getHrefByRel($scope.data.links, 'self');
        $scope.loadResource(url);
      };

    }],
  }
})
