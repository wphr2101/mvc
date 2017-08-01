var myModule = angular.module('myModule', []);
myModule.value("modMsg", "Hello from My Module");
myModule.controller("controllerB", ['$scope', '$window', 'modMsg', function ($scope, $window, msg) {
    $window.alert("My Module is Loaded!!");
    $scope.message = msg;
}]);

var myApp = angular.module('myApp', ['myModule']);
myApp.value("appMsg", "Hello from My App");
myApp.controller("controllerA", ['$scope', 'appMsg', function ($scope, msg) {    
    $scope.message = msg;
}]);