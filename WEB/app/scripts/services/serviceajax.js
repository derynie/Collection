'use strict';

/**
 * @ngdoc service
 * @name webApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the webApp.
 */
angular.module('webApp')
  .factory('serviceAjax', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      animes: function (currentPage) {
        console.log(currentPage);
        return $http.get("http://localhost:3004/api/animes/" + currentPage);
      }
    };
  });
