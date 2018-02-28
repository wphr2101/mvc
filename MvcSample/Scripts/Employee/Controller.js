app.controller("empCntrl", function ($scope, apiService) {
    $scope.divEmployee = false;
    GetAllEmployee();
    //To Get All Records 
    function GetAllEmployee() {
        debugger;
        var getData = apiService.getList("Employee/getAllEmp");
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
            $scope.employeeAddr = employee.address;
            $scope.employeeCity = employee.city;
            $scope.employeeState = employee.state;
            $scope.employeeZip = employee.zip;
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
            Age: $scope.employeeAge,
            address: $scope.employeeAddr,
            city: $scope.employeeCity,
            state: $scope.employeeState,
            zip: $scope.employeeZip
        };
        var getAction = $scope.Action;

        if (getAction === "Update") {
            Employee.Id = $scope.employeeId;
            getData = apiService.updateItem("Employee/UpdateEmployee", Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            getData = apiService.AddItem("Employee/AddEmployee", Employee);
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
app.controller("deptCntrl", function ($scope, apiService) {
    $scope.divDepartment = false;
    GetAllDepartments();
    //To Get All Records 
    function GetAllDepartments() {
        debugger;
        var getData = apiService.getList("Dept/getAllDept");
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
            $scope.deptId = department.Id;
            $scope.deptName = department.Name;
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

        if (getAction === "Update") {
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
            getData = apiService.AddItem("Dept/AddDept", Department);
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
app.controller("projCntrl", function ($scope, apiService) {
    $scope.divProject = false;
    GetAllProjects();
    //To Get All Records 
    function GetAllProjects() {
        debugger;
        var getData = apiService.getList("Project/getAllProj");
        debugger;
        getData.then(function (proj) {
            $scope.projects = proj.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editProject = function (project) {
        debugger;
        var getData = apiService.getItem("Project/getProjByNo", project.Id);
        getData.then(function (proj) {
            $scope.project = proj.data;
            $scope.projId = project.Id;
            $scope.projName = project.Name;
            $scope.projDescr = project.Description;
            $scope.Action = "Update";
            $scope.divProject = true;
        },
        function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateProject = function () {
        debugger;
        var Project = {
            Name: $scope.projName,
            Description: $scope.projDescr
        };
        var getAction = $scope.Action;
        console.log(Project);
        if (getAction === "Update") {
            Project.Id = $scope.projId;
            var getData = apiService.updateItem("Project/UpdateProj", Project);
            getData.then(function (msg) {
                GetAllProjects();
                alert(msg.data);
                $scope.divProject = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            getData = apiService.AddItem("Project/AddProj", Project);
            getData.then(function (msg) {
                GetAllProjects();
                alert(msg.data);
                $scope.divProject = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddProjectDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divProject = true;
    }

    $scope.deleteProject = function (project) {
        var getData = apiService.DeleteItem("Project/DeleteProj", project);
        getData.then(function (msg) {
            GetAllProjects();
            alert(msg.data);
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.projId = "";
        $scope.projName = "";
        $scope.projDescr = "";
    }
});