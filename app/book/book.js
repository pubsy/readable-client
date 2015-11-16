'use strict';

angular.module('myApp.book', [])

.directive('bookDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'book/book.html'
  }
})
