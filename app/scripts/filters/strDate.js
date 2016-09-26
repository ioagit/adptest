/**
 * Created by ioannissuarez on 9/25/16.
 */

(function(angular) {

  'use strict';

  angular.module('ngadpApp').filter('strDate',  strDate);



  function strDate($filter) {

    return function(input, format)
    {
      if(input == null){ return ""; }

      format = format || 'MM/dd/yyyy';

      var _date = $filter('date')(new Date(input), format);

      return _date.toUpperCase();

    };


  }

 }

)(angular);
