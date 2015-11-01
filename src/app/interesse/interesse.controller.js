(function() {
  'use strict';

  angular
    .module('nyhedsbreveadmin')
    .controller('InteresseController', InteresseController);

  /** @ngInject */
  function InteresseController($scope, mdbAPI) {
    var vm = this;

    activate();

    function activate() {
      mdbAPI.getAllInteresser().then(function(interesser) {
        vm.interesser = interesser;
      })
    }


  }
})();
