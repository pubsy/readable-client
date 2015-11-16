'use strict';

angular.module('myApp.users', [])

.directive('usersDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'users/users.html'
  }
})
