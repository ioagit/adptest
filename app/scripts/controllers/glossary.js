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
    .controller('GlossaryCtrl', function (dataSvc) {

      this.loading = true;

      //filter on click. Not biding to search box as it can only filter on Click of the Ok button.
      this.filterGlossary = function(term) {
        this.searchedTerm = term;
      };

      //the url could go to a config file so it is not harcode here
      dataSvc.getData('https://www.healthcare.gov/api/glossary.json').then(successCb.bind(this), errorCb.bind(this))
        .finally(function() {
        this.loading = false
      }.bind(this));

      function successCb(data) {
        this.entries = data.glossary;
      }

      function errorCb(error) {
        this.error = error
      }

    });
})();
