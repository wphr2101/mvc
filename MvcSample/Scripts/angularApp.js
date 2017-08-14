var angApp = angular.module('angApp', []); //'pagingApp'

//angApp.directive('myDesc', function () {
//    return {
//        transclude: true,
//        restrict: 'E',
//        scope: { title: '@' },
//        template: '<div>{{title}}<div ng-transclude></div></div>'
//    };
//});

//angApp.directive('myImg', function () {
//    return {
//        transclude: true,
//        restrict: 'E',
//        scope: { title: '@', iheight: '@iheight' },
//        template: '<div><span class="titleBar">{{title}}</span><div ng-transclude></div></div>'
//    };
//});

angApp.controller('countryController', ['$scope', '$http', function ($scope, $http) {
    $scope.countries = "";
    
    $scope.loadCountries = function () {
        $http.get("http://localhost:57468/country/SerializedCountryData").then(successCallback, errorCallback)
    };

    function successCallback(response) {
        $scope.countries = response.data;
        $scope.showError = !$scope.showError;

        $scope.currentPage = 0;
        $scope.pageSize = 7;
        $scope.numberOfPages = Math.ceil(response.data.length / $scope.pageSize);
    }

    function errorCallback(error) {
        $scope.error = error;
    }

    $scope.loadCountries();
    $scope.nation = "";

    $scope.getCountryDetails = function (id) {
        $scope.nation = $scope.countries[id-1];
        $scope.showMe = !$scope.showMe;
    }
    $scope.goBack = function () {
        $scope.showMe = !$scope.showMe;
    }

    
}]);

angApp.filter('firstPage', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    }
});