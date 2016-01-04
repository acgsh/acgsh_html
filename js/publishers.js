
var app = angular.module('acgshApp', ['ngSanitize']);
app.controller('customersCtrl', function($scope, $http) {

    $scope.publishers=[];
    $http.get("./api/publishers/")
        .then(function(response) {
            $scope.publishers = response.data;
        });
});


