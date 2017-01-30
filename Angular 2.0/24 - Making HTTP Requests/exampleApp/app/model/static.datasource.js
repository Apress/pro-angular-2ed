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
var StaticDataSource = (function () {
    function StaticDataSource() {
        this.data = new Array(new product_model_1.Product(1, "Kayak", "Watersports", 275), new product_model_1.Product(2, "Lifejacket", "Watersports", 48.95), new product_model_1.Product(3, "Soccer Ball", "Soccer", 19.50), new product_model_1.Product(4, "Corner Flags", "Soccer", 34.95), new product_model_1.Product(5, "Thinking Cap", "Chess", 16));
    }
    StaticDataSource.prototype.getData = function () {
        return this.data;
    };
    StaticDataSource = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StaticDataSource);
    return StaticDataSource;
}());
exports.StaticDataSource = StaticDataSource;
