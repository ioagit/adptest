/**
 * Created by ioannissuarez on 9/26/16.
 */

(function (angular) {
  angular.module('ngadpApp')
    .directive("languageSelector", function () {
      return {
        restrict: "EA",
        scope: {
          selectedLang: "="
        },
        template: [
          '<select class="form-control" ng-options="lang.id as lang.label for lang in languages" ng-model="selectedLang">',
          '<option value="" disabled>language</option>',
          '</select>'
        ].join(''),
        controller: ['$scope', 'langSvc', function($scope, langSvc) {
          $scope.languages = langSvc.languages;
        }]
      };
    })
})(angular);
