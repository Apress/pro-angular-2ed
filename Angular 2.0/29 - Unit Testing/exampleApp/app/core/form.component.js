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
var product_model_1 = require("../model/product.model");
var repository_model_1 = require("../model/repository.model");
var router_1 = require("@angular/router");
var FormComponent = (function () {
    function FormComponent(model, activeRoute, router) {
        var _this = this;
        this.model = model;
        this.router = router;
        this.product = new product_model_1.Product();
        this.originalProduct = new product_model_1.Product();
        this.editing = false;
        activeRoute.params.subscribe(function (params) {
            _this.editing = params["mode"] == "edit";
            var id = params["id"];
            if (id != null) {
                Object.assign(_this.product, model.getProduct(id) || new product_model_1.Product());
                Object.assign(_this.originalProduct, _this.product);
            }
        });
    }
    FormComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.originalProduct = this.product;
            this.router.navigateByUrl("/");
        }
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: "paForm",
            moduleId: module.id,
            templateUrl: "form.component.html",
            styleUrls: ["form.component.css"]
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model, router_1.ActivatedRoute, router_1.Router])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
