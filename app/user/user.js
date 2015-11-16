'use strict';

angular.module('myApp.user', [])

.directive('userDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'user/user.html'
  }
})
