(function () {
  'use strict';

  angular
    .module('claims')
    .controller('ClaimsListController', ClaimsListController);

  ClaimsListController.$inject = ['ClaimsService'];

  function ClaimsListController(ClaimsService) {
    var vm = this;

    vm.claims = ClaimsService.query();
  }
})();
