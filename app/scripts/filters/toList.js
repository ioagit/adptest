/**
 * Created by ioannissuarez on 9/25/16.
 */

(function(angular) {

  'use strict';

  angular.module('ngadpApp').filter('toList',  toList);



  function toList() {

    return function(source, separator) {

      separator = separator || ", ";
      source = source || [];

      var joined = source.join(separator);



      //strip last separator
      return joined.substr(0, joined.length - separator.length)


    }


  }

 }

)(angular);
