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
var product_model_1 = require("./product.model");
var form_model_1 = require("./form.model");
var repository_model_1 = require("./repository.model");
var ProductFormComponent = (function () {
    function ProductFormComponent(model) {
        this.model = model;
        this.form = new form_model_1.ProductFormGroup();
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
    }
    //@Output("paNewProduct")
    //newProductEvent = new EventEmitter<Product>();
    ProductFormComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            //this.newProductEvent.emit(this.newProduct);
            this.model.saveProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    };
    ProductFormComponent = __decorate([
        core_1.Component({
            selector: "paProductForm",
            templateUrl: "app/productForm.component.html",
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
exports.ProductFormComponent = ProductFormComponent;
