/**
 * Created by ioannissuarez on 9/25/16.
 */

(function(angular) {

  'use strict';

  angular.module('ngadpApp').factory('langSvc',  langSvc);


  function langSvc() {

    //the language list
    return {
      languages: [
        {
          id: 'en',
          label: 'english'
        },
        {
          id: 'es',
          label: 'español'
        },
        {
          id: '',
          label: 'both'
        }
      ]
      }
    }
 }

)(angular);
