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
var addTax_pipe_1 = require("./addTax.pipe");
var attr_directive_1 = require("./attr.directive");
var categoryFilter_pipe_1 = require("./categoryFilter.pipe");
var cellColor_directive_1 = require("./cellColor.directive");
var cellColorSwitcher_directive_1 = require("./cellColorSwitcher.directive");
var discount_pipe_1 = require("./discount.pipe");
var discountAmount_directive_1 = require("./discountAmount.directive");
var iterator_directive_1 = require("./iterator.directive");
var structure_directive_1 = require("./structure.directive");
var twoway_directive_1 = require("./twoway.directive");
var valueDisplay_directive_1 = require("./valueDisplay.directive");
var discount_service_1 = require("./discount.service");
var log_service_1 = require("./log.service");
var model_module_1 = require("../model/model.module");
var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        core_1.NgModule({
            imports: [model_module_1.ModelModule],
            providers: [log_service_1.LogService, discount_service_1.DiscountService,
                { provide: valueDisplay_directive_1.VALUE_SERVICE, useValue: "Apples" }],
            declarations: [addTax_pipe_1.PaAddTaxPipe, attr_directive_1.PaAttrDirective, categoryFilter_pipe_1.PaCategoryFilterPipe,
                cellColor_directive_1.PaCellColor, cellColorSwitcher_directive_1.PaCellColorSwitcher, discount_pipe_1.PaDiscountPipe,
                discountAmount_directive_1.PaDiscountAmountDirective, iterator_directive_1.PaIteratorDirective, structure_directive_1.PaStructureDirective,
                twoway_directive_1.PaModel, valueDisplay_directive_1.PaDisplayValueDirective],
            exports: [addTax_pipe_1.PaAddTaxPipe, attr_directive_1.PaAttrDirective, categoryFilter_pipe_1.PaCategoryFilterPipe,
                cellColor_directive_1.PaCellColor, cellColorSwitcher_directive_1.PaCellColorSwitcher, discount_pipe_1.PaDiscountPipe,
                discountAmount_directive_1.PaDiscountAmountDirective, iterator_directive_1.PaIteratorDirective, structure_directive_1.PaStructureDirective,
                twoway_directive_1.PaModel, valueDisplay_directive_1.PaDisplayValueDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;
