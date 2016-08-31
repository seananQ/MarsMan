angular.module("app",[]).controller("myCtrl",function($scope,$http){
    
    $http.get('../data/detail.json').success(function(datas){
        $scope.details = datas;
    })

});

