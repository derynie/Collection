'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AnimeCtrl
 * @description
 * # AnimeCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AnimeCtrl', function ($scope, serviceAjax, $rootScope) {

    //$scope.totalItems = 64;
    // $scope.currentPage = 4;

    //Variable
    var vm = this;
    vm.totalPages = 0;
    if (vm.currentPage == undefined) {
      vm.currentPage = 1;
    }
    vm.animes = [];
    vm.loading = false;
    vm.updateDone = false;
    $rootScope.nbUpdated = 1;

    //Method
    vm.loadAnime = loadAnime;
    vm.pageChanged = pageChanged;


    function loadAnime() {
      vm.loading = true;
      serviceAjax.animes(vm.currentPage).then(function(result){

        vm.animes = result.data.Animes;
        if ($rootScope.nbUpdated == 1)
          vm.totalPages = result.data.Animes[0].NbTotalPage;
        vm.loading = false;
        if ($rootScope.nbUpdated > 1)
          vm.updateDone = false;
        $rootScope.nbUpdated++;

      });
    }

    function pageChanged(){
      if (!vm.updateDone) {
        loadAnime();
      } else {
        vm.updateDone = true;
      }
    }

    loadAnime();

  });
