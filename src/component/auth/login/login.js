angular.module('conferenceApp')
    .component('login', {
        templateUrl: 'src/component/auth/login/login.htm',
        controller: function loginController($scope,$rootScope, apiCallout, $cookies, $error,$location) {
            $scope.request = {}
            $scope.login = function() {
                $scope.errorMessage = null;
                $scope.dangerAlert = null;
                if (!$scope.Email_id__c) {
                    $scope.errorMessage = 'Please enter your username';
                    return;
                }
                $scope.request.Email_id__c = $scope.Email_id__c;

                if (!$scope.User_Password__c) {
                    $scope.errorMessage = 'Please enter your password';
                    return;
                }
                $scope.request.User_Password__c = $scope.User_Password__c

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
        }
    });