var conferenceApp = angular.module('conferenceApp', ['ui.router', 'ngCookies', 'toaster', 'blockUI']);
conferenceApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $windowProvider) {
    $urlRouterProvider.otherwise('/home/welcome');
    $stateProvider
        .state('forgotpassword', {
            url: '/forgotpassword',
            template: '<forgot-password></forgot-password>'
        })
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
        .state('verifyEmail', {
            url: '/verifyEmail',
            template: '<verify-email></verify-email>'
        })
        .state('resetPassword', {
            url: '/resetPassword',
            template: '<reset-password></reset-password>'
        })
        .state('register', {
            url: '/register',
            template: '<register></register>'
        })
        .state('bookingCart', {
            url: '/bookingCart',
            template: '<booking-cart></booking-cart>'
        })
        .state('help', {
            url: '/help',
            template: '<help></help>'
        })
})