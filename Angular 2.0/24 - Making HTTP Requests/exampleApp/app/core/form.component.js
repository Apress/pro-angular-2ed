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
var product_model_1 = require("../model/product.model");
var repository_model_1 = require("../model/repository.model");
var sharedState_model_1 = require("./sharedState.model");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/skipWhile");
var FormComponent = (function () {
    function FormComponent(model, stateEvents) {
        var _this = this;
        this.model = model;
        this.stateEvents = stateEvents;
        this.product = new product_model_1.Product();
        this.editing = false;
        stateEvents
            .subscribe(function (update) {
            _this.product = new product_model_1.Product();
            if (update.id != undefined) {
                Object.assign(_this.product, _this.model.getProduct(update.id));
            }
            _this.editing = update.mode == sharedState_model_1.MODES.EDIT;
        });
    }
    FormComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new product_model_1.Product();
            form.reset();
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
        __param(1, core_1.Inject(sharedState_model_1.SHARED_STATE)), 
        __metadata('design:paramtypes', [repository_model_1.Model, Observable_1.Observable])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
