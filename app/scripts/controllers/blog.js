'use strict';

/**
 * @ngdoc function
 * @name ngadpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngadpApp
 */
(function () {
  angular.module('ngadpApp')
    .controller('BlogCtrl', function (dataSvc) {

      this.loading = true;

      //the url could go to a config file so it is not harcoded here
      dataSvc.getData('https://www.healthcare.gov/api/blog.json').then(successCb.bind(this), errorCb.bind(this))
        .finally(function() {
          this.loading = false
        }.bind(this));


      function successCb(data) {
        this.entries = data.blog;
      }

      function errorCb(error) {
        this.error = error
      }

    });
})();
