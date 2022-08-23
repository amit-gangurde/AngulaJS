angular.module('conferenceApp')
    .component('bookingCart', {

        templateUrl: 'src/component/member/bookingCart/bookingCart.htm',
        controller: function bookingCartController($scope, $rootScope, $error, apiCallout) {
            $scope.showTable = false;
            var x = 30;
            $scope.times = [];
            var tt = 0;
            var ap = ['AM', 'PM'];
            for (var i=0;tt<24*60; i++) {
                var hh = Math.floor(tt/60);
                var mm = (tt%60);
                $scope.times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)];
                tt = tt + x;
            }
            $scope.user = $rootScope.user;
            $scope.getData = function() {
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
            $scope.bookConference = function(floor, conference) {
                console.log('floor ===' + floor);
                console.log('conference ===' + conference);
                $scope.request = {};
                apiCallout.post($scope.request, '/auth/login').then(function(response) {
                    if (response.success) {
                        $error.showSuccess(response.message);
                        $rootScope.user = $scope.Email_id__c;
                        $location.path('bookingPage');
                    } else {
                        if (response.statusCode === 403) {
                            $scope.dangerAlert = response.message;
                            return;
                        }
                        $scope.errorMessage = response.message;
                        return;
                    }
                }, function(response) {
                    if (response.statusCode === 403) {
                        $scope.dangerAlert = response.message;
                        return;
                    }
                    $scope.errorMessage = response.message;
                    return;
                });
            }
            $scope.bookConference = function() {
                $scope.showTable = true;
            }
            $scope.getData();
        }
    });