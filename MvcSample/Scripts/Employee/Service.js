app.service("myService", function ($http) {

    //get All Eployee
    this.getEmployees = function () {
        debugger;
        return $http.get("Employee/GetAll");
    };

    // get Employee By Id
    this.getEmployee = function (employeeID) {
        var response = $http({
            method: "post",
            url: "Employee/getEmployeeByNo",
            params: {
                id: JSON.stringify(employeeID)
            }
        });
        return response;
    }

    // Update Employee
    this.updateEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Employee/UpdateEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    this.AddEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Employee/AddEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    //Delete Employee
    this.DeleteEmp = function (employeeId) {
        var response = $http({
            method: "post",
            url: "Employee/DeleteEmployee",
            params: {
                employeeId: JSON.stringify(employeeId)
            }
        });
        return response;
    }
});