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
var router_1 = require("@angular/router");
var product_model_1 = require("../model/product.model");
var product_repository_1 = require("../model/product.repository");
var ProductEditorComponent = (function () {
    function ProductEditorComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new product_model_1.Product();
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }
    ProductEditorComponent.prototype.save = function (form) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    };
    ProductEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "productEditor.component.html"
        }), 
        __metadata('design:paramtypes', [product_repository_1.ProductRepository, router_1.Router, router_1.ActivatedRoute])
    ], ProductEditorComponent);
    return ProductEditorComponent;
}());
exports.ProductEditorComponent = ProductEditorComponent;
