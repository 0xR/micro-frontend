'use strict';

angular.module('clientsideIntegration', ['ui.router', 'oc.lazyLoad'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('oembed-demo', {
        url: '/oembed-demo',
        templateUrl: 'app/oembed-demo/oembed.html',
        controller: 'OembedCtrl as oembedCtrl',
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('app/oembed-demo/oembed.controller.js');
          }]
        }
      })
      .state('checkout-client', {
        url: '/checkout-client',
        templateUrl: 'app/checkout-client/checkout.html',
        controller: 'CheckoutCtrl as checkoutCtrl',
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('app/checkout-client/checkout.controller.js');
          }]
        }
      })
      .state('checkout-server', {
        url: '/checkout-server',
        templateUrl: 'app/checkout-server/checkout.html',
        controller: 'CheckoutCtrl as checkoutCtrl',
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('app/checkout-server/checkout.controller.js');
          }]
        }
      });

    $urlRouterProvider.otherwise('/');
  })
;
