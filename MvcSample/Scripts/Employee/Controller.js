app.controller("empCntrl", "reusable", function ($scope, apiService) {
    $scope.divEmployee = false;
    GetAllEmployee();
    //To Get All Records 
    function GetAllEmployee() {
        debugger;
        var getData = apiService.getList("Employee/GetAll");
        debugger;
        getData.then(function (emp) {
            $scope.employees = emp.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editEmployee = function (employee) {
        debugger;
        var getData = apiService.getItem("Employee/getEmployeeByNo", employee.Id);
        getData.then(function (emp) {
            $scope.employee = emp.data;
            $scope.employeeId = employee.Id;
            $scope.employeeName = employee.name;
            $scope.employeeEmail = employee.email;
            $scope.employeeAge = employee.age;
            $scope.Action = "Update";
            $scope.divEmployee = true;
        },
        function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateEmployee = function () {
        debugger;
        var Employee = {
            Name: $scope.employeeName,
            Email: $scope.employeeEmail,
            Age: $scope.employeeAge
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Employee.Id = $scope.employeeId;
            var getData = apiService.updateItem("Employee/UpdateEmployee", Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            //Employee.Id = $scope.latestId;
            var getData = apiService.AddItem("Employee/AddEmployee", Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddEmployeeDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployee = function (employee) {
        var getData = apiService.DeleteItem("Employee/DeleteEmployee", employee);
        getData.then(function (msg) {
            GetAllEmployee();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.employeeId = "";
        $scope.employeeName = "";
        $scope.employeeEmail = "";
        $scope.employeeAge = "";
    }
});
app.controller("deptCntrl", "reusable", function ($scope, apiService) {
    $scope.divDepartment = false;
    GetAllDepartments();
    //To Get All Records 
    function GetAllDepartments() {
        debugger;
        var getData = apiService.getList("Dept/GetAll");
        debugger;
        getData.then(function (emp) {
            $scope.departments = emp.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editDepartment = function (department) {
        debugger;
        var getData = apiService.getItem("Dept/getDeptByNo", department.Id);
        getData.then(function (dept) {
            $scope.department = dept.data;
            $scope.deptId = dept.Id;
            $scope.deptName = dept.name;
            $scope.Action = "Update";
            $scope.divDepartment = true;
        },
        function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateDepartment = function () {
        debugger;
        var Department = {
            Name: $scope.deptName
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Department.Id = $scope.deptId;
            var getData = apiService.updateItem("Dept/UpdateDept", Department);
            getData.then(function (msg) {
                GetAllDepartments();
                alert(msg.data);
                $scope.divDepartment = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            //Employee.Id = $scope.latestId;
            var getData = apiService.AddItem("Dept/AddDept", Department);
            getData.then(function (msg) {
                GetAllDepartments();
                alert(msg.data);
                $scope.divDepartment = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddDepartmentDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divDepartment = true;
    }

    $scope.deleteDepartment = function (department) {
        var getData = apiService.DeleteItem("Dept/DeleteDept", department);
        getData.then(function (msg) {
            GetAllDepartments();
            alert('Department Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.deptId = "";
        $scope.deptName = "";
    }
});