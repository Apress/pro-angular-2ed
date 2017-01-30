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
var rest_datasource_1 = require("../model/rest.datasource");
var FirstComponent = (function () {
    function FirstComponent(datasource) {
        this.datasource = datasource;
        this._category = "Soccer";
        this._products = [];
        this.highlighted = false;
    }
    FirstComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    FirstComponent.prototype.getProducts = function () {
        return this._products;
    };
    Object.defineProperty(FirstComponent.prototype, "category", {
        set: function (newValue) {
            this._category;
            this.updateData();
        },
        enumerable: true,
        configurable: true
    });
    FirstComponent.prototype.updateData = function () {
        var _this = this;
        this.datasource.getData()
            .subscribe(function (data) { return _this._products = data
            .filter(function (p) { return p.category == _this._category; }); });
    };
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            moduleId: module.id,
            templateUrl: "first.component.html"
        }), 
        __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
