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
exports.VALUE_SERVICE = new core_1.OpaqueToken("value_service");
var PaDisplayValueDirective = (function () {
    function PaDisplayValueDirective(serviceValue) {
        this.elementContent = serviceValue || "No Value";
    }
    __decorate([
        core_1.HostBinding("textContent"), 
        __metadata('design:type', String)
    ], PaDisplayValueDirective.prototype, "elementContent", void 0);
    PaDisplayValueDirective = __decorate([
        core_1.Directive({
            selector: "[paDisplayValue]"
        }),
        __param(0, core_1.Inject(exports.VALUE_SERVICE)),
        __param(0, core_1.Host()),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [String])
    ], PaDisplayValueDirective);
    return PaDisplayValueDirective;
}());
exports.PaDisplayValueDirective = PaDisplayValueDirective;
