angular.module('angApp', []).controller('countryController', ['$scope', '$http', function ($scope, $http) {
    $scope.countries = "";

    $scope.loadCountries = function () {
        $http.get("http://localhost:57468/country/SerializedCountryData").then(successCallback, errorCallback)
    };

    function successCallback(response) {
        $scope.countries = response.data;
        $scope.showError = !$scope.showError;
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