angular.module('conferenceApp')
    .component('bookingPage', {

        templateUrl: 'src/component/member/bookingPage/bookingPage.htm',
        controller: function bookingPageController($scope, $rootScope, $state) {
           $scope.bookingCart = function() {
             $state.go('bookingCart');
           }
        }
    });