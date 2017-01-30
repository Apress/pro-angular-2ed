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
var first_component_1 = require("../app/ondemand/first.component");
var product_model_1 = require("../app/model/product.model");
var rest_datasource_1 = require("../app/model/rest.datasource");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
var core_1 = require("@angular/core");
var MockDataSource = (function () {
    function MockDataSource() {
        this.data = [
            new product_model_1.Product(1, "test1", "Soccer", 100),
            new product_model_1.Product(2, "test2", "Chess", 100),
            new product_model_1.Product(3, "test3", "Soccer", 100),
        ];
    }
    MockDataSource.prototype.getData = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            setTimeout(function () { return obs.next(_this.data); }, 1000);
        });
    };
    MockDataSource = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MockDataSource);
    return MockDataSource;
}());
describe("FirstComponent", function () {
    var fixture;
    var component;
    var dataSource = new MockDataSource();
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first_component_1.FirstComponent],
            providers: [
                { provide: rest_datasource_1.RestDataSource, useValue: dataSource }
            ]
        });
        testing_1.TestBed.compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(first_component_1.FirstComponent);
            component = fixture.componentInstance;
        });
    }));
    it("performs async op", function () {
        dataSource.data.push(new product_model_1.Product(100, "test100", "Soccer", 100));
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(component.getProducts().length).toBe(3);
        });
    });
});
