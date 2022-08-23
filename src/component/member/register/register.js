angular.module('conferenceApp')
    .component('register', {

        templateUrl: 'src/component/member/register/register.htm',
        controller: function registerController($scope, $state, $error, apiCallout) {
            $scope.messageWithLink = false;
            $scope.valLinkExpire = false;
            $scope.messageWithLink = false;

            $scope.register = function() {
                $scope.errorMessage = null;
                $scope.successMessage = null;
                if ($scope.User_Password__c === '' || !$scope.User_Password__c) {
                    $scope.errorMessage = "Please enter your password";
                    return;
                };
                
                $scope.requestBody = {
                    Email_id__c : $scope.Email_id__c,
                    User_Password__c: $scope.User_Password__c,
                    Employee_Id__c :$scope.Employee_Id__c
                }
                apiCallout.post($scope.requestBody, '/employee/register').then(function(response) {
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
                        $error.showSuccess(response.message);
                        $state.go('login');
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