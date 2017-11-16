webpackJsonp(["ondemand.module"],{

/***/ "../../../../../src/app/ondemand/first.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FirstComponent = (function () {
    function FirstComponent() {
    }
    FirstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "first",
            template: "<div class=\"bg-primary p-a-1\">First Component</div>"
        })
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ondemand/ondemand.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 p-a-1\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"col-xs-6\">\r\n    <router-outlet name=\"left\"></router-outlet>\r\n</div>\r\n<div class=\"col-xs-6\">\r\n    <router-outlet name=\"right\"></router-outlet>\r\n</div>\r\n<div class=\"p-a-1\">\r\n    <button class=\"btn btn-secondary m-t-1\" routerLink=\"/ondemand\">Normal</button>\r\n    <button class=\"btn btn-secondary m-t-1\" routerLink=\"/ondemand/swap\">Swap</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ondemand/ondemand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OndemandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OndemandComponent = (function () {
    function OndemandComponent() {
    }
    OndemandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "ondemand",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/ondemand/ondemand.component.html")
        })
    ], OndemandComponent);
    return OndemandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ondemand/ondemand.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndemandModule", function() { return OndemandModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ondemand_component__ = __webpack_require__("../../../../../src/app/ondemand/ondemand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__first_component__ = __webpack_require__("../../../../../src/app/ondemand/first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__second_component__ = __webpack_require__("../../../../../src/app/ondemand/second.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forChild([
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__ondemand_component__["a" /* OndemandComponent */],
        children: [
            {
                path: "",
                children: [
                    { outlet: "primary", path: "", component: __WEBPACK_IMPORTED_MODULE_4__first_component__["a" /* FirstComponent */], },
                    { outlet: "left", path: "", component: __WEBPACK_IMPORTED_MODULE_5__second_component__["a" /* SecondComponent */], },
                    { outlet: "right", path: "", component: __WEBPACK_IMPORTED_MODULE_5__second_component__["a" /* SecondComponent */], },
                ]
            },
            {
                path: "swap",
                children: [
                    { outlet: "primary", path: "", component: __WEBPACK_IMPORTED_MODULE_5__second_component__["a" /* SecondComponent */], },
                    { outlet: "left", path: "", component: __WEBPACK_IMPORTED_MODULE_4__first_component__["a" /* FirstComponent */], },
                    { outlet: "right", path: "", component: __WEBPACK_IMPORTED_MODULE_4__first_component__["a" /* FirstComponent */], },
                ]
            },
        ]
    },
]);
var OndemandModule = (function () {
    function OndemandModule() {
    }
    OndemandModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], routing],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ondemand_component__["a" /* OndemandComponent */], __WEBPACK_IMPORTED_MODULE_4__first_component__["a" /* FirstComponent */], __WEBPACK_IMPORTED_MODULE_5__second_component__["a" /* SecondComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ondemand_component__["a" /* OndemandComponent */]]
        })
    ], OndemandModule);
    return OndemandModule;
}());



/***/ }),

/***/ "../../../../../src/app/ondemand/second.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondComponent = (function () {
    function SecondComponent() {
    }
    SecondComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "second",
            template: "<div class=\"bg-info p-a-1\">Second Component</div>"
        })
    ], SecondComponent);
    return SecondComponent;
}());



/***/ })

});
//# sourceMappingURL=ondemand.module.chunk.js.map