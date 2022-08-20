angular.module('conferenceApp')

.config(function($stateProvider) {
    $stateProvider.state('home.welcome', {
            url: '/welcome',
            template: '<welcome></welcome>'
        })
        .state('home.memberInfo', {
            url: '/memberInfo',
            template: '<member-info></member-info>',
        })
        .state('home.reservationInfo', {
            url: '/reservationInfo',
            template: '<reservation-info></reservation-info>'
        })
        .state('home.rightSideBar', {
            url: '/rightSideBar',
            template: ' <right-sidebar></right-sidebar>'
        })
        .state('home.requestReservation', {
            url: '/requestReservation',
            template: ' <request-reservation></request-reservation>'
        })
        .state('home.accountInfo', {
            url: '/accountInfo',
            template: ' <account-info></account-info>'
        })
        .state('home.checkInbox', {
            url: '/checkInbox',
            template: '<check-inbox></check-inbox>'
        })
        .state('home.activeReservation', {
            url: '/activeReservation',
            template: ' <active-reservation></active-reservation>'
        })
        .state('home.payment', {
            url: '/payment',
            template: ' <v2payment></v2payment>'
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
            $state.go('register');
        }
    }
});