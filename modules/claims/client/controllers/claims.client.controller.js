(function () {
  'use strict';

  // Claims controller
  angular
    .module('claims')
    .controller('ClaimsController', ClaimsController);

  ClaimsController.$inject = ['$scope', '$state', 'Authentication', 'claimResolve'];

  function ClaimsController ($scope, $state, Authentication, claim) {
    var vm = this;

    vm.authentication = Authentication;
    vm.claim = claim;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Claim
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.claim.$remove($state.go('claims.list'));
      }
    }

    // Save Claim
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.claimForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.claim._id) {
        vm.claim.$update(successCallback, errorCallback);
      } else {
        vm.claim.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('claims.view', {
          claimId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
