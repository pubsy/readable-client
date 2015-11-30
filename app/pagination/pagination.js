'use strict';

angular.module('myApp.pagination', [])

.directive('listPagination', function(){
  return {
    restrict: 'E',
    templateUrl: 'pagination/pagination.html'
  }
})
