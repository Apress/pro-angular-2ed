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
var router_1 = require("@angular/router");
var table_animations_1 = require("./table.animations");
var TableComponent = (function () {
    function TableComponent(model, activeRoute) {
        var _this = this;
        this.model = model;
        this.category = null;
        this.highlightCategory = "";
        activeRoute.params.subscribe(function (params) {
            _this.category = params["category"] || null;
        });
    }
    TableComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    TableComponent.prototype.getProducts = function () {
        var _this = this;
        return this.model.getProducts()
            .filter(function (p) { return _this.category == null || p.category == _this.category; });
    };
    Object.defineProperty(TableComponent.prototype, "categories", {
        get: function () {
            return this.model.getProducts()
                .map(function (p) { return p.category; })
                .filter(function (category, index, array) { return array.indexOf(category) == index; });
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.deleteProduct = function (key) {
        this.model.deleteProduct(key);
    };
    TableComponent.prototype.getRowState = function (category) {
        return this.highlightCategory == "" ? "" :
            this.highlightCategory == category ? "selected" : "notselected";
    };
    TableComponent.prototype.writeAnimationEvent = function (event, name, start) {
        console.log("Animation " + name + " " + (start ? 'Start' : 'Done')
            + " from: " + event.fromState + " to: " + event.toState + " time: "
            + event.totalTime);
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: "paTable",
            moduleId: module.id,
            templateUrl: "table.component.html",
            animations: [table_animations_1.HighlightTrigger]
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model, router_1.ActivatedRoute])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
