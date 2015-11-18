(function() {
  'use strict';

  angular
    .module('nyhedsbreveadmin')
    .controller('UserDetailContoller', UserDetailContoller);

  /** @ngInject */
  function UserDetailContoller($scope, $stateParams, $state, toastr, errorhandler, mdbAPI) {
    var vm = this;

    activate();

    function goto(state) {
      $state.go(state);
    }

    function getInteresser() {
      // body...
    }

    function getUser() {
      mdbAPI.getUser($stateParams.ekstern_id).then(function(user) {
        $scope.user = user;
      });
    }


    function updateUser(user) {
      return mdbAPI.updateUser(user)
      .then(function(savedUser) {
        if (savedUser.ekstern_id !== user.ekstern_id) {
          $state.go('user-detail.core', {ekstern_id: savedUser.ekstern_id});
        }
        $scope.user  = savedUser;
        toastr.success('Oplysningerne blev gemt');
      })
      .catch(errorhandler.errorhandler);
    }



    function activate() {
      getUser();
      $scope.goto = goto;
      $scope.updateUser = updateUser;

    }


  }
})();
