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
var CategoryCountComponent = (function () {
    function CategoryCountComponent(model, keyValueDiffers, changeDetector) {
        this.model = model;
        this.keyValueDiffers = keyValueDiffers;
        this.changeDetector = changeDetector;
        this.count = 0;
    }
    CategoryCountComponent.prototype.ngOnInit = function () {
        this.differ = this.keyValueDiffers
            .find(this.model.getProducts())
            .create(this.changeDetector);
    };
    CategoryCountComponent.prototype.ngDoCheck = function () {
        if (this.differ.diff(this.model.getProducts()) != null) {
            this.count = this.model.getProducts()
                .map(function (p) { return p.category; })
                .filter(function (category, index, array) { return array.indexOf(category) == index; })
                .length;
        }
    };
    CategoryCountComponent = __decorate([
        core_1.Component({
            selector: "paCategoryCount",
            template: "<div class=\"bg-primary p-a-1\">There are {{count}} categories</div>"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], CategoryCountComponent);
    return CategoryCountComponent;
}());
exports.CategoryCountComponent = CategoryCountComponent;
