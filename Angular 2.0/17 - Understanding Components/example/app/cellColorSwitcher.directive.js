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
var cellColor_directive_1 = require("./cellColor.directive");
var PaCellColorSwitcher = (function () {
    function PaCellColorSwitcher() {
    }
    PaCellColorSwitcher.prototype.ngOnChanges = function (changes) {
        this.updateContentChildren(changes["modelProperty"].currentValue);
    };
    PaCellColorSwitcher.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.contentChildren.changes.subscribe(function () {
            setTimeout(function () { return _this.updateContentChildren(_this.modelProperty); }, 0);
        });
    };
    PaCellColorSwitcher.prototype.updateContentChildren = function (dark) {
        if (this.contentChildren != null && dark != undefined) {
            this.contentChildren.forEach(function (child, index) {
                child.setColor(index % 2 ? dark : !dark);
            });
        }
    };
    __decorate([
        core_1.Input("paCellDarkColor"), 
        __metadata('design:type', Boolean)
    ], PaCellColorSwitcher.prototype, "modelProperty", void 0);
    __decorate([
        core_1.ContentChildren(cellColor_directive_1.PaCellColor), 
        __metadata('design:type', core_1.QueryList)
    ], PaCellColorSwitcher.prototype, "contentChildren", void 0);
    PaCellColorSwitcher = __decorate([
        core_1.Directive({
            selector: "table"
        }), 
        __metadata('design:paramtypes', [])
    ], PaCellColorSwitcher);
    return PaCellColorSwitcher;
}());
exports.PaCellColorSwitcher = PaCellColorSwitcher;
