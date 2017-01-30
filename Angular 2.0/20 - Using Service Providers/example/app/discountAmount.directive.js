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
var discount_service_1 = require("./discount.service");
var PaDiscountAmountDirective = (function () {
    function PaDiscountAmountDirective(keyValueDiffers, changeDetector, discount) {
        this.keyValueDiffers = keyValueDiffers;
        this.changeDetector = changeDetector;
        this.discount = discount;
    }
    PaDiscountAmountDirective.prototype.ngOnInit = function () {
        this.differ =
            this.keyValueDiffers.find(this.discount).create(this.changeDetector);
    };
    PaDiscountAmountDirective.prototype.ngOnChanges = function (changes) {
        if (changes["originalPrice"] != null) {
            this.updateValue();
        }
    };
    PaDiscountAmountDirective.prototype.ngDoCheck = function () {
        if (this.differ.diff(this.discount) != null) {
            this.updateValue();
        }
    };
    PaDiscountAmountDirective.prototype.updateValue = function () {
        this.discountAmount = this.originalPrice
            - this.discount.applyDiscount(this.originalPrice);
    };
    __decorate([
        core_1.Input("pa-price"), 
        __metadata('design:type', Number)
    ], PaDiscountAmountDirective.prototype, "originalPrice", void 0);
    PaDiscountAmountDirective = __decorate([
        core_1.Directive({
            selector: "td[pa-price]",
            exportAs: "discount"
        }), 
        __metadata('design:paramtypes', [core_1.KeyValueDiffers, core_1.ChangeDetectorRef, discount_service_1.DiscountService])
    ], PaDiscountAmountDirective);
    return PaDiscountAmountDirective;
}());
exports.PaDiscountAmountDirective = PaDiscountAmountDirective;
