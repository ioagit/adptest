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
    .controller('ContactUsCtrl', function () {


      this.contactReasons = ['Healthcare Marketplace', 'Technical Support', 'Website Feedback'];

      //prevent form submit and show alerts
      this.handleSubmit = function(form) {

        var msg = form.$valid ? 'Form is valid': 'Form is invalid';
        alert(msg);

        //prevent submit
        return false;
      }


    });
})();
