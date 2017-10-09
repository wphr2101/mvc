var reusable = angular.module('reusable', []);
reusable.service('apiService', function ($http) {
    this.getList = function (URL) {
        debugger;
        return $http.get(URL);
    };

    this.getItem = function (URL, itemID) {
        var response = $http({
            method: "post",
            url: URL,
            params: {
                id: JSON.stringify(itemID)
            }
        });
        return response;
    }

    this.updateItem = function (URL, item) {
        var response = $http({
            method: "post",
            url: URL,
            data: JSON.stringify(item),
            dataType: "json"
        });
        return response;
    }

    this.AddItem = function (URL, item) {
        var response = $http({
            method: "post",
            url: URL,
            data: JSON.stringify(item),
            dataType: "json"
        });
        return response;
    }

    this.DeleteItem = function (URL, item) {
        var response = $http({
            method: "post",
            url: URL,
            data: JSON.stringify(item),
            dataType: "json"
        });
        return response;
    }
});