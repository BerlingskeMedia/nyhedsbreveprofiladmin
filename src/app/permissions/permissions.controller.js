(function() {
  'use strict';

  angular
    .module('nyhedsbreveadmin')
    .controller('PermissionsController', PermissionsController);

  /** @ngInject */
  function PermissionsController($scope, mdbAPI) {
    var vm = this;

    activate();

    function activate() {
      mdbAPI.getPermissions().then(function(response) {
        vm.permissions = response.data;
      })
    }


  }
})();