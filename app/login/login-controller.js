'use strict';

angular.module('myApp')

.controller('LoginCtrl', function ($scope, $uibModalInstance, AuthenticationService) {

  $scope.user = {};

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.login = function(user){
    AuthenticationService.SetCredentials(user.username,user.password);

    var url = $scope.getHrefByRel($scope.data.links, 'self');
    $scope.loadResource(url);

    $uibModalInstance.close();
  };
});
