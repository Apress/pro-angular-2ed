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
var PaAttrDirective = (function () {
    function PaAttrDirective() {
        this.click = new core_1.EventEmitter();
    }
    PaAttrDirective.prototype.triggerCustomEvent = function () {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    };
    __decorate([
        core_1.Input("pa-attr"),
        core_1.HostBinding("class"), 
        __metadata('design:type', String)
    ], PaAttrDirective.prototype, "bgClass", void 0);
    __decorate([
        core_1.Input("pa-product"), 
        __metadata('design:type', product_model_1.Product)
    ], PaAttrDirective.prototype, "product", void 0);
    __decorate([
        core_1.Output("pa-category"), 
        __metadata('design:type', Object)
    ], PaAttrDirective.prototype, "click", void 0);
    __decorate([
        core_1.HostListener("click"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], PaAttrDirective.prototype, "triggerCustomEvent", null);
    PaAttrDirective = __decorate([
        core_1.Directive({
            selector: "[pa-attr]"
        }), 
        __metadata('design:paramtypes', [])
    ], PaAttrDirective);
    return PaAttrDirective;
}());
exports.PaAttrDirective = PaAttrDirective;
