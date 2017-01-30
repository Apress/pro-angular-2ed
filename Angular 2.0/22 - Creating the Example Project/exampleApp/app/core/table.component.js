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
var repository_model_1 = require("../model/repository.model");
var sharedState_model_1 = require("./sharedState.model");
var TableComponent = (function () {
    function TableComponent(model, state) {
        this.model = model;
        this.state = state;
    }
    TableComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    TableComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    TableComponent.prototype.deleteProduct = function (key) {
        this.model.deleteProduct(key);
    };
    TableComponent.prototype.editProduct = function (key) {
        this.state.id = key;
        this.state.mode = sharedState_model_1.MODES.EDIT;
    };
    TableComponent.prototype.createProduct = function () {
        this.state.id = undefined;
        this.state.mode = sharedState_model_1.MODES.CREATE;
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: "paTable",
            moduleId: module.id,
            templateUrl: "table.component.html"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model, sharedState_model_1.SharedState])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
