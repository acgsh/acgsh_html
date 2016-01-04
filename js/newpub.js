
var app = angular.module('acgshApp', ['ngSanitize']);
app.controller('customersCtrl', function($scope, $http) {
    $scope.username="";
    $scope.info="";
    $scope.btnDisabled=false;
    $scope.regPublisher=function() {
        $scope.btnDisabled=true;
        $scope.info="註冊中...";
        console.log($scope.username);
        $http.post("./api/reg/"+$scope.username)
            .then(function(response) {
                console.log(response.data);
                if(response.data["ok"]==true){
                    $scope.username="";
                    $scope.btnDisabled=false;
                    $scope.info="已成功提交註冊信息，請訪問“已登記資源發佈者”頁面查看是否登記成功。";
                }else{
                    $scope.info="註冊失敗！";
                    $scope.btnDisabled=false;
                }
            });

    };


});


