(function() {
  'use strict';

  angular
    .module('nyhedsbreveadmin')
    .controller('PublisherDetailController', PublisherDetailController);

  /** @ngInject */
  function PublisherDetailController($stateParams, $state, mdbAPI) {
    var vm = this;
    vm.update = update;
    vm.delete = deletePublisher;
    vm.create = create;

    activate();

    function activate() {
      vm.createMode = $state.current.name === 'main.publisher-create';
      console.log($state.current.name);
      console.log('vm.createMode', vm.createMode);
      if (vm.createMode) {
        return;
      }

      var id = $stateParams.id;
      mdbAPI.getPublisher(id).then(function(publisher) {
        vm.publisher = publisher;
      });
    }

    function create(publisher) {
      return mdbAPI.createPublisher(publisher).then(function(publisher) {
        toastr.success('Publisher oprettet');
        $state.go('main.publisher-detail', {id: publisher.publisher_id});
      });
    }

    function update(publisher) {
      return mdbAPI.putPublisher(publisher);
    }

    function deletePublisher(publisher) {
      return mdbAPI.deletePublisher(publisher);
    }


  }
})();
