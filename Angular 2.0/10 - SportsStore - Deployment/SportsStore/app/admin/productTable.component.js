import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
export var ProductTableComponent = (function () {
    function ProductTableComponent(repository) {
        this.repository = repository;
    }
    ProductTableComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (id) {
        this.repository.deleteProduct(id);
    };
    ProductTableComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "productTable.component.html"
                },] },
    ];
    /** @nocollapse */
    ProductTableComponent.ctorParameters = [
        { type: ProductRepository, },
    ];
    return ProductTableComponent;
}());
