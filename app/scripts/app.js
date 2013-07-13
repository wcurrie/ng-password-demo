'use strict';

angular.module('playApp', [])
    .controller('MainCtrl', function ($scope) {
        function Rule(description, validator) {
            this.description = description;
            this.class = function () {
                return validator() ? "icon-check" : "icon-exclamation-sign";
            }
        }

        $scope.password1 = "";
        $scope.password2 = "";
        $scope.rules = [
            new Rule('Contain a digit', function () {
                return $scope.password1.match(/[0-9]/);
            }),
            new Rule('Contain an upper case character', function () {
                return $scope.password1.match(/[A-Z]/);
            }),
            new Rule('Contain a lower case character', function () {
                return $scope.password1.match(/[a-z]/);
            }),
            new Rule('Contain the word \'cow\'', function () {
                return $scope.password1.match(/cow/);
            })
        ];
        $scope.match = function() {
            return !$scope.password1 || !$scope.password2 || $scope.password1 == $scope.password2;
        };
    });
