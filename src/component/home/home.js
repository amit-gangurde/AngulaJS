angular.module('conferenceApp')

.config(function($stateProvider) {
    $stateProvider
        .state('home.welcome', {
            url: '/welcome',
            template: '<welcome></welcome>'
        })
        .state('home.bookingPage', {
            url: '/bookingPage',
            template: '<booking-page></booking-page>'
        })
        .state('home.bookingCart', {
            url: '/bookingCart',
            template: '<booking-cart></booking-cart>'
        })
})

.run(function($location, $window) {

    var $window = $window.location;
    if ($window.hash) {
        if ($window.hash === '') {
            $location.path('/home');
        } else {
            if (!$window.hash.includes('register') && !$window.hash.includes('resetPassword') && !$window.hash.includes('updateEmail'))
                $location.path($window.hash.substr(2));
        }
    }
})

.component('home', {
    templateUrl: 'src/component/home/home.htm',
    controller: function home($scope, apiCallout, $error, blockUI,utils, $cookies,$state,$rootScope,$location) {
        $scope.login = function(){
            $state.go('login');
        }
        $scope.register = function(){
            $state.go('bookingPage');
        }
    }
});