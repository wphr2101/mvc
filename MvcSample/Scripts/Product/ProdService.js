app.service("prodService", function ($http) {

    //get All Eployee
    this.getProducts = function () {
        debugger;
        return $http.get("Products/GetAll");
    };

    //get Last Id
    this.getLastId = function () {        
        return $http.get("Products/getLastId");
    };

    // get Product By Id
    this.getProduct = function (prodID) {
        var response = $http({
            method: "post",
            url: "Products/getProductById",
            params: {
                prodId: JSON.stringify(prodID)
            }
        });
        return response;
    }

    // Update Product
    this.updateProduct = function (product) {
        var response = $http({
            method: "post",
            url: "Products/UpdateProduct",
            data: JSON.stringify(product),
            dataType: "json"
        });
        return response;
    }

    // Add Product
    this.addProduct = function (product) {
        var response = $http({
            method: "post",
            url: "Products/AddProduct",
            data: JSON.stringify(product),
            dataType: "json"
        });
        return response;
    }

    //Delete Product
    this.deleteProduct = function (product) {
        var response = $http({
            method: "post",
            url: "Products/DeleteProduct",
            data: JSON.stringify(product),
            dataType: "json"
        });
        return response;
    }
});