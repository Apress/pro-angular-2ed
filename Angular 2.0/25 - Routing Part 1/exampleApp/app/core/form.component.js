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
        this.model = model;
        this.router = router;
        this.product = new product_model_1.Product();
        this.editing = false;
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        var id = activeRoute.snapshot.params["id"];
        if (id != null) {
            var name_1 = activeRoute.snapshot.params["name"];
            var category = activeRoute.snapshot.params["category"];
            var price = activeRoute.snapshot.params["price"];
            if (name_1 != null && category != null && price != null) {
                this.product.id = id;
                this.product.name = name_1;
                this.product.category = category;
                this.product.price = Number.parseFloat(price);
            }
            else {
                Object.assign(this.product, model.getProduct(id) || new product_model_1.Product());
            }
        }
    }
    FormComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            //this.product = new Product();
            //form.reset();
            this.router.navigateByUrl("/");
        }
    };
    FormComponent.prototype.resetForm = function () {
        this.product = new product_model_1.Product();
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
