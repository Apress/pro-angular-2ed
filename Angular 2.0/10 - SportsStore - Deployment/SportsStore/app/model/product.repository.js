import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
export var ProductRepository = (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.categories = data.map(function (p) { return p.category; })
                .filter(function (c, index, array) { return array.indexOf(c) == index; }).sort();
        });
    }
    ProductRepository.prototype.getProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products
            .filter(function (p) { return category == null || category == p.category; });
    };
    ProductRepository.prototype.getProduct = function (id) {
        return this.products.find(function (p) { return p.id == id; });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.categories;
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product)
                .subscribe(function (p) { return _this.products.push(p); });
        }
        else {
            this.dataSource.updateProduct(product)
                .subscribe(function (p) {
                _this.products.splice(_this.products.
                    findIndex(function (p) { return p.id == product.id; }), 1, product);
            });
        }
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dataSource.deleteProduct(id).subscribe(function (p) {
            _this.products.splice(_this.products.
                findIndex(function (p) { return p.id == id; }), 1);
        });
    };
    ProductRepository.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProductRepository.ctorParameters = [
        { type: RestDataSource, },
    ];
    return ProductRepository;
}());
