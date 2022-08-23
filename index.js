var conferenceApp = angular.module('conferenceApp', ['ui.router', 'ngCookies', 'toaster', 'blockUI']);
conferenceApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/welcome');
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('bookingPage', {
            url: '/bookingPage',
            template: '<booking-page></booking-page>'
        })
        .state('register', {
            url: '/register',
            template: '<register></register>'
        })
        .state('bookingCart', {
            url: '/bookingCart',
            template: '<booking-cart></booking-cart>'
        })
})