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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var product_model_1 = require("./product.model");
var form_model_1 = require("./form.model");
var repository_model_1 = require("./repository.model");
var valueDisplay_directive_1 = require("./valueDisplay.directive");
var ProductFormComponent = (function () {
    function ProductFormComponent(model, serviceValue) {
        this.model = model;
        this.serviceValue = serviceValue;
        this.form = new form_model_1.ProductFormGroup();
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
        console.log("Service Value: " + serviceValue);
    }
    ProductFormComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
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
            viewProviders: [{ provide: valueDisplay_directive_1.VALUE_SERVICE, useValue: "Oranges" }]
        }),
        __param(1, core_1.Inject(valueDisplay_directive_1.VALUE_SERVICE)),
        __param(1, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [repository_model_1.Model, String])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
exports.ProductFormComponent = ProductFormComponent;
