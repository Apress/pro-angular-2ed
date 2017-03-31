"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var rest_datasource_1 = require("./rest.datasource");
var ProductRepository = (function () {
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
    ProductRepository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
    ], ProductRepository);
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
