var app = angular.module("prodApp", []);

app.controller("prodCntrl", function ($scope, prodService) {
    $scope.divProduct = false;
    //$scope.lastId = prodService.getLastId();
    GetAllProducts();
    //To Get All Records 
    function GetAllProducts() {
        debugger;
        var getData = prodService.getProducts();
        debugger;
        getData.then(function (prod) {
            $scope.products = prod.data;            
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editProduct = function (product) {
        debugger;
        var getData = prodService.getProduct(product.Id);
        getData.then(function (prod) {
            $scope.product = prod.data;
            $scope.productId = product.Id;
            $scope.productName = product.Name;
            $scope.productPrice = product.Price;
            $scope.productQuantity = product.Quantity;
            $scope.Action = "Update";
            $scope.divProduct = true;
        },
        function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateProduct = function () {
        $(".form-control").removeClass("invalid");
        if ($("#productName").val() == "") {
            $("#productName").addClass("invalid");
            alert("The Product Name must be filled.");
        }
        else if ($("#productPrice").val() == "" || isNaN($("#productPrice").val())) {
            $("#productPrice").addClass("invalid");
            alert("The Product Price must be filled with numbers.");
        }
        else if ($("#productQuantity").val() == "" || isNaN($("#productQuantity").val())) {
            $("#productQuantity").addClass("invalid");
            alert("The Product Quantity must be filled with numbers.");
        }
        else {
            var Product = {
                //Id: prodService.getLastId(),
                Name: $scope.productName,
                Price: $scope.productPrice,
                Quantity: $scope.productQuantity
            };
            var getAction = $scope.Action;

            if (getAction == "Update") {
                Product.Id = $scope.productId;
                var getData = prodService.updateProduct(Product);
                getData.then(function (msg) {
                    alert(msg.data);
                }, function () {
                    alert('Error in updating record');
                });
            }
            else {                
                var getData = prodService.addProduct(Product);
                getData.then(function (msg) {
                    alert(msg.data);
                }, function () {
                    alert('Error in adding record');
                });
            }
            GetAllProducts();
            $scope.divProduct = false;
        }
    }

    $scope.AddProductDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divProduct = true;
    }

    $scope.deleteProduct = function (product) {
        console.log("Controller: " + product);
        var getData = prodService.deleteProduct(product);
        getData.then(function (msg) {
            GetAllProducts();
            alert('Product Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
        
    }

    function ClearFields() {
        $scope.productId = "";
        $scope.productName = "";
        $scope.productPrice = "";
        $scope.productQuantity = "";
    }
});