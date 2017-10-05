var reusable = angular.module('reusable', []);
reusable.service('apiService', function ($http) {

    //get All Eployee
    //this.getEmployees = function (URL) {
    this.getList = function (URL) {
        debugger;
        return $http.get(URL);
        ///return $http.get("Employee/GetAll");
    };

    // get Employee By Id
    //this.getEmployee = function (URL, employeeID) {
    this.getItem = function (URL, itemID) {
        var response = $http({
            method: "post",
            //url: "Employee/getEmployeeByNo",
            url: URL,
            params: {
                id: JSON.stringify(itemID)
            }
        });
        return response;
    }

    // Update Employee
    //this.updateEmp = function (URL, employee) {
    this.updateItem = function (URL, item) {
        var response = $http({
            method: "post",
            url: URL,
            data: JSON.stringify(item),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    //this.AddEmp = function (employee) {
    this.AddItem = function (URL, item) {
        var response = $http({
            method: "post",
            url: URL,
            data: JSON.stringify(item),
            dataType: "json"
        });
        return response;
    }

    //Delete Employee
    //this.DeleteEmp = function (employee) {
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