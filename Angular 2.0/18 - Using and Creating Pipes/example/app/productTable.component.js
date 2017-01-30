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
var repository_model_1 = require("./repository.model");
var ProductTableComponent = (function () {
    function ProductTableComponent() {
        this.dateObject = new Date(2020, 1, 20);
        this.dateString = "2020-02-20T00:00:00.000Z";
        this.dateNumber = 1582156800000;
    }
    ProductTableComponent.prototype.getProduct = function (key) {
        return this.dataModel.getProduct(key);
    };
    ProductTableComponent.prototype.getProducts = function () {
        return this.dataModel.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (key) {
        this.dataModel.deleteProduct(key);
    };
    __decorate([
        core_1.Input("model"), 
        __metadata('design:type', repository_model_1.Model)
    ], ProductTableComponent.prototype, "dataModel", void 0);
    ProductTableComponent = __decorate([
        core_1.Component({
            selector: "paProductTable",
            templateUrl: "app/productTable.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductTableComponent);
    return ProductTableComponent;
}());
exports.ProductTableComponent = ProductTableComponent;
