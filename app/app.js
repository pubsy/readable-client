'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'config',
  'ui.bootstrap',
  'myApp.books',
  'myApp.book',
  'myApp.user',
  'myApp.users',
  'myApp.navigation',
  'myApp.search',
  'myApp.services',
  'ngCookies'
])

.directive('parentDirective', function($http, $compile){
  return {
    restrict: 'E',
    controller: function ($scope, $element, $attrs, $uibModal, ENV, Navigation, Resource, AuthenticationService) {

      $scope.navigation = {};
      $scope.data = {};
      $scope.search = null;

      $scope.init = function(){
        $scope.loadNavigation(function(){
            $scope.loadResource($scope.getHrefByRel($scope.navigation.links, 'Books'));
        });
      }

      $scope.loadResource = function(url, formName){
        $scope.loadNavigation(function(){});

        var data = {};
        if(typeof formName !== "undefined") {
          url += '?' + $('[name="'+ formName +'"]').serialize();
        }

        $scope.load(url, data);
      }

      $scope.loadNavigation = function(successCallback){
        Navigation.load(ENV.apiEndpoint).then(function(data) {
          $scope.navigation = data;
          successCallback();
        });
      }

      $scope.load = function(url, data){

        $scope.search = {};

        Resource.load(url, data).then(function(data) {
          $scope.data = data;
          $scope.search = $scope.getActionByRel('search');

          var htm;
          switch (data.class) {
            case "NavigationResource":
              break;
            case "BooksListResource":
              htm = '<books-directive></books-directive>';
              break;
            case "BookResource":
              htm = '<book-directive></book-directive>';
              break;
            case "UsersListResource":
              htm = '<users-directive></users-directive>';
              break;
            case "UserResource":
              htm = '<user-directive></user-directive>';
              break;
            default:
              console.log("Sorry, we are out of .");
          }
          var compiled = $compile(htm)($scope);
          $element.html(compiled);
        }, function errorCallback(response) {
          alert("error " + response.status);
        });
      };

      $scope.getHrefByRel = function(links, rel){
        for(var link of links){
          for(var currRel of link.rel){
            if(currRel == rel){
              return link.href;
            }
          }
        }
        return '';
      }

      $scope.getActionByRel = function(rel){
        if($scope.data.actions == null){
          return null;
        }
        for(var action of $scope.data.actions){
          for(var currRel of action.rel){
            if(currRel == rel){
              return action;
            }
          }
        }
        return null;
      }

      $scope.isActionPresent = function(actions, rel){
        return $scope.getActionByRel(actions, rel) == null;
      }

      $scope.loginPopup = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl',
          size: 'sm'
        });
      };

      $scope.showActionModal = function(action){
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'modal/modal.html',
          controller: 'ModalInstanceCtrl',
          size: 'sm',
          resolve: {
            action: action
          }
        });
      }

      $scope.init();
    }
  }
})

angular.module('myApp.services', []);
