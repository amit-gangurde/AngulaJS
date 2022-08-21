angular.module('conferenceApp')
    .component('bookingPage', {

        templateUrl: 'src/component/member/bookingPage/bookingPage.htm',
        controller: function bookingPageController($scope, $error, apiCallout, $cookies, $state) {
           $scope.getData = function() {
            var token = $cookies.get('token')
            if (token === undefined || token === null) {
                $state.go('login');
            }
            apiCallout.get('/employee/getInfo').then(function(response) {
                if (response.success) {
                    $scope.onEdit = true;
                    $scope.conferenceInfo = response.data;
                    return;
                } else {
                    $error.showError(response.message);
                    return;
                }
            }, function(response) {
                $error.showError(response.message);
                return;
            });
           }
           $scope.bookingCart = function() {
             $state.go('bookingCart');
           }
           //$scope.getData();
        }
    });