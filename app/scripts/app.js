'use strict';

/**
 * @ngdoc overview
 * @name ngadpApp
 * @description
 * # ngadpApp
 *
 * Main module of the application.
 */
angular
  .module('ngadpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/glossary', {
        templateUrl: 'views/glossary.html',
        controller: 'GlossaryCtrl',
        controllerAs: 'glossary'
      })
      .when('/contact_us', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contactus'
      })
      .otherwise({
        redirectTo: '/blog'
      });

    $locationProvider.html5Mode({enabled: true, requireBase: false});
  });
