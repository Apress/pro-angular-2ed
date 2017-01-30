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
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var attr_directive_1 = require("../app/ondemand/attr.directive");
var TestComponent = (function () {
    function TestComponent() {
        this.className = "initialClass";
    }
    __decorate([
        core_1.ViewChild(attr_directive_1.PaAttrDirective), 
        __metadata('design:type', attr_directive_1.PaAttrDirective)
    ], TestComponent.prototype, "attrDirective", void 0);
    TestComponent = __decorate([
        core_1.Component({
            template: "<div><span [pa-attr]=\"className\">Test Content</span></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
describe("PaAttrDirective", function () {
    var fixture;
    var directive;
    var spanElement;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent, attr_directive_1.PaAttrDirective],
        });
        fixture = testing_1.TestBed.createComponent(TestComponent);
        directive = fixture.componentInstance.attrDirective;
        spanElement = fixture.debugElement.query(platform_browser_1.By.css("span")).nativeElement;
    });
    it("generates the correct number of elements", function () {
        fixture.detectChanges();
        expect(directive.bgClass).toBe("initialClass");
        expect(spanElement.className).toBe("initialClass");
        fixture.componentInstance.className = "nextClass";
        fixture.detectChanges();
        expect(directive.bgClass).toBe("nextClass");
        expect(spanElement.className).toBe("nextClass");
    });
});
