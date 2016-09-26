/**
 * Created by ioannissuarez on 9/25/16.
 */

(function(angular) {

  'use strict';

  angular.module('ngadpApp').factory('dataSvc',  dataSvc);


    /**
     * Small Service to retrieve data
      * @param $http - angular $http Service
     * @param $q - angular queue
     * @returns {{getData: getData}}
     */
  function dataSvc($http, $q) {

    return {
      getData: getData
    };


      /**
       * Takes an URL and return a promise.
       * @param apiUrl
       * @returns {Function}
       */
    function getData(apiUrl) {

      var deferred = $q.defer();

      $http.get(apiUrl).then(
        function (res) {
          deferred.resolve(res.data);
        },
        function() {
          deferred.reject('Error occurred getting data from:' + apiUrl);
        }
      );

      return deferred.promise

    }
  }

 }

)(angular);
