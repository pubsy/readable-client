'use strict';

angular.module('myApp')

.controller('ModalInstanceCtrl', function ($http, $scope, $uibModalInstance, action) {

  $scope.action = action;

  $scope.submitAction = function () {
    var data = $('[name="'+ $scope.action.rel[0] +'"]').serialize();

    $http({
      method: $scope.action.method,
      url: $scope.action.href,
      data: data,
      headers: {
        'Accept': 'application/vnd.siren+json',
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    }).then(function(response) {
      $scope.loadResource($scope.getHrefByRel($scope.data.links, 'self'));
      $uibModalInstance.close();
    });
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
