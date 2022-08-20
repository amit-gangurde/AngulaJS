angular.module('conferenceApp')
    .component('register', {

        templateUrl: 'src/component/member/register/register.htm',
        controller: function registerController($scope, $cookies, $state, $location, $error, utils, apiCallout, $window) {
            $scope.messageWithLink = false;
            $scope.valLinkExpire = false;
            $scope.messageWithLink = false;

            $scope.register = function() {
                $scope.errorMessage = null;
                $scope.successMessage = null;
                if ($scope.User_Password__c === '' || !$scope.User_Password__c) {
                    $scope.errorMessage = "Please enter your password";
                    document.getElementById("message").style.display = "none";
                    return;
                };
                
                
                $scope.requestBody = {
                    Email_id__c : $scope.Email_id__c,
                    User_Password__c: $scope.User_Password__c,
                    Employee_Id__c :$scope.Employee_Id__c

                }
                apiCallout.post($scope.requestBody, '/member/register').then(function(response) {
                    if (!response.success) {
                        if(response.message === 'You have already register for member portal.') {
                            $scope.messageWithLink = true;
                        }
                        if(response.message === 'The validation link has expired.') {
                            $scope.valLinkExpire = true;
                        }
                        $scope.errorMessage = response.message;
                        return;
                    } else {
                        $cookies.put("token", response.data.token, { path: '/' });
                        $error.showSuccess(response.message);
                        $location.path('/home/welcome/');
                        return;
                    }
                }, function(response) {
                    if(response.message === 'Token has expired') {
                        response.message = 'The validation link has expired.';
                        $scope.valLinkExpire = true;
                    }
                    return $scope.errorMessage = response.message;
                });
            };

        }
    });