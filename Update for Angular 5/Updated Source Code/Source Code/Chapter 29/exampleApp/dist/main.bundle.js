webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/ondemand/ondemand.module": [
		"../../../../../src/app/ondemand/ondemand.module.ts",
		"ondemand.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<paMessages></paMessages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app",
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_module__ = __webpack_require__("../../../../../src/app/messages/message.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_guard__ = __webpack_require__("../../../../../src/app/terms.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__load_guard__ = __webpack_require__("../../../../../src/app/load.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_3__messages_message_module__["a" /* MessageModule */], __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__terms_guard__["a" /* TermsGuard */], __WEBPACK_IMPORTED_MODULE_7__load_guard__["a" /* LoadGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");

var routes = [
    {
        path: "ondemand",
        loadChildren: "app/ondemand/ondemand.module#OndemandModule"
    },
    { path: "", redirectTo: "/ondemand", pathMatch: "full" }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/core/animationUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getStylesFromClasses;
function getStylesFromClasses(names, elementType) {
    if (elementType === void 0) { elementType = "div"; }
    var elem = document.createElement(elementType);
    (typeof names == "string" ? [names] : names).forEach(function (c) { return elem.classList.add(c); });
    var result = {};
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        var rules = sheet.rules || sheet.cssRules;
        for (var j = 0; j < rules.length; j++) {
            if (rules[j].type == CSSRule.STYLE_RULE) {
                var styleRule = rules[j];
                if (elem.matches(styleRule.selectorText)) {
                    for (var k = 0; k < styleRule.style.length; k++) {
                        result[styleRule.style[k]] =
                            styleRule.style[styleRule.style[k]];
                    }
                }
            }
        }
    }
    return result;
}


/***/ }),

/***/ "../../../../../src/app/core/categoryCount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryCountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
            .create();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "paCategoryCount",
            template: "<div class=\"bg-primary p-a-1\">There are {{count}} categories</div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_repository_model__["a" /* Model */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* KeyValueDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], CategoryCountComponent);
    return CategoryCountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model_module__ = __webpack_require__("../../../../../src/app/model/model.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_component__ = __webpack_require__("../../../../../src/app/core/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_component__ = __webpack_require__("../../../../../src/app/core/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_pipe__ = __webpack_require__("../../../../../src/app/core/state.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_message_module__ = __webpack_require__("../../../../../src/app/messages/message.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__productCount_component__ = __webpack_require__("../../../../../src/app/core/productCount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categoryCount_component__ = __webpack_require__("../../../../../src/app/core/categoryCount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notFound_component__ = __webpack_require__("../../../../../src/app/core/notFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__unsaved_guard__ = __webpack_require__("../../../../../src/app/core/unsaved.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__model_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_7__messages_message_module__["a" /* MessageModule */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["e" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_6__state_pipe__["a" /* StatePipe */],
                __WEBPACK_IMPORTED_MODULE_9__productCount_component__["a" /* ProductCountComponent */], __WEBPACK_IMPORTED_MODULE_10__categoryCount_component__["a" /* CategoryCountComponent */], __WEBPACK_IMPORTED_MODULE_11__notFound_component__["a" /* NotFoundComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12__unsaved_guard__["a" /* UnsavedGuard */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__model_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_4__table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }\r\ninput.ng-dirty.ng-valid { border: 2px solid #6bc502 }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary p-a-1\" [class.bg-warning]=\"editing\">\r\n    <h5>{{editing  ? \"Edit\" : \"Create\"}} Product</h5>\r\n</div>\r\n<div *ngIf=\"editing\" class=\"p-t-1\">\r\n    <button class=\"btn btn-secondary\" \r\n        [routerLink]=\"['/form', 'edit', model.getPreviousProductid(product.id)]\">\r\n            Previous\r\n    </button>\r\n    <button class=\"btn btn-secondary\"\r\n        [routerLink]=\"['/form', 'edit', model.getNextProductId(product.id)]\">\r\n            Next\r\n    </button>\r\n</div>\r\n<!--<form novalidate #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\" (reset)=\"resetForm()\" >-->\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\" >\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input class=\"form-control\" name=\"name\" \r\n               [(ngModel)]=\"product.name\" required />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Category</label>\r\n        <input class=\"form-control\" name=\"category\" \r\n               [(ngModel)]=\"product.category\" required />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Price</label>\r\n        <input class=\"form-control\" name=\"price\" \r\n               [(ngModel)]=\"product.price\" \r\n               required pattern=\"^[0-9\\.]+$\" />\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" \r\n            [class.btn-warning]=\"editing\" [disabled]=\"form.invalid\">\r\n        {{editing ? \"Save\" : \"Create\"}}\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" routerLink=\"/\">Cancel</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_model__ = __webpack_require__("../../../../../src/app/model/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = (function () {
    function FormComponent(model, activeRoute, router) {
        var _this = this;
        this.model = model;
        this.router = router;
        this.product = new __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */]();
        this.originalProduct = new __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */]();
        this.editing = false;
        activeRoute.params.subscribe(function (params) {
            _this.editing = params["mode"] == "edit";
            var id = params["id"];
            if (id != null) {
                Object.assign(_this.product, model.getProduct(id) || new __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */]());
                Object.assign(_this.originalProduct, _this.product);
            }
        });
    }
    FormComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.originalProduct = this.product;
            this.router.navigateByUrl("/");
        }
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "paForm",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/core/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_repository_model__["a" /* Model */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/notFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "paNotFound",
            template: "<h3 class=\"bg-danger p-a-1\">Sorry, something went wrong</h3>\n               <button class=\"btn btn-primary\" routerLink=\"/\">Start Over</button>"
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/productCount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCountComponent = (function () {
    function ProductCountComponent(model, keyValueDiffers, changeDetector, activeRoute) {
        var _this = this;
        this.model = model;
        this.keyValueDiffers = keyValueDiffers;
        this.changeDetector = changeDetector;
        this.count = 0;
        activeRoute.pathFromRoot.forEach(function (route) { return route.params.subscribe(function (params) {
            if (params["category"] != null) {
                _this.category = params["category"];
                _this.updateCount();
            }
        }); });
    }
    ProductCountComponent.prototype.ngOnInit = function () {
        this.differ = this.keyValueDiffers
            .find(this.model.getProducts())
            .create();
    };
    ProductCountComponent.prototype.ngDoCheck = function () {
        if (this.differ.diff(this.model.getProducts()) != null) {
            this.updateCount();
        }
    };
    ProductCountComponent.prototype.updateCount = function () {
        var _this = this;
        this.count = this.model.getProducts()
            .filter(function (p) { return _this.category == null || p.category == _this.category; })
            .length;
    };
    ProductCountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "paProductCount",
            template: "<div class=\"bg-info p-a-1\">There are {{count}} products</div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_repository_model__["a" /* Model */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* KeyValueDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductCountComponent);
    return ProductCountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/sharedState.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SharedState; });
/* unused harmony export SHARED_STATE */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var MODES;
(function (MODES) {
    MODES[MODES["CREATE"] = 0] = "CREATE";
    MODES[MODES["EDIT"] = 1] = "EDIT";
})(MODES || (MODES = {}));
var SharedState = (function () {
    function SharedState(mode, id) {
        this.mode = mode;
        this.id = id;
    }
    return SharedState;
}());

var SHARED_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]("shared_state");


/***/ }),

/***/ "../../../../../src/app/core/state.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedState_model__ = __webpack_require__("../../../../../src/app/core/sharedState.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatePipe = (function () {
    function StatePipe(model) {
        this.model = model;
    }
    StatePipe.prototype.transform = function (value) {
        if (value instanceof __WEBPACK_IMPORTED_MODULE_1__sharedState_model__["b" /* SharedState */]) {
            var state = value;
            return __WEBPACK_IMPORTED_MODULE_1__sharedState_model__["a" /* MODES */][state.mode] + (state.id != undefined
                ? " " + this.model.getProduct(state.id).name : "");
        }
        else {
            return "<No Data>";
        }
    };
    StatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: "formatState",
            pure: true
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_repository_model__["a" /* Model */]])
    ], StatePipe);
    return StatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/table.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animationUtils__ = __webpack_require__("../../../../../src/app/core/animationUtils.ts");


var HighlightTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* trigger */])("rowHighlight", [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])("selected", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])(Object(__WEBPACK_IMPORTED_MODULE_1__animationUtils__["a" /* getStylesFromClasses */])(["bg-success", "h2"]))),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])("notselected", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])(Object(__WEBPACK_IMPORTED_MODULE_1__animationUtils__["a" /* getStylesFromClasses */])("bg-info"))),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])("void", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({
        transform: "translateX(-50%)"
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])("* => notselected", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])("200ms")),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])("* => selected", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])("400ms 200ms ease-in")),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])("void => *", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])("500ms"))
]);


/***/ }),

/***/ "../../../../../src/app/core/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group bg-info p-a-1\">\r\n    <label>Category</label>\r\n    <select [(ngModel)]=\"highlightCategory\" class=\"form-control\">\r\n        <option value=\"\">None</option>\r\n        <option *ngFor=\"let category of categories\">\r\n            {{category}}\r\n        </option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-sm table-bordered table-striped\">\r\n    <tr>\r\n        <th>ID</th><th>Name</th><th>Category</th><th>Price</th><th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of getProducts()\" \r\n            [@rowHighlight]=\"getRowState(item.category)\"\r\n            (@rowHighlight.start)=\"writeAnimationEvent($event, item.name, true)\"\r\n            (@rowHighlight.done)=\"writeAnimationEvent($event, item.name, false)\">\r\n        <td style=\"vertical-align:middle\">{{item.id}}</td>\r\n        <td style=\"vertical-align:middle\">{{item.name}}</td>\r\n        <td style=\"vertical-align:middle\">{{item.category}}</td>\r\n        <td style=\"vertical-align:middle\">\r\n            {{item.price | currency:\"USD\":true }}\r\n        </td>\r\n        <td class=\"text-xs-center\">\r\n            <button class=\"btn btn-danger btn-sm\" \r\n                    (click)=\"deleteProduct(item.id)\">\r\n                Delete\r\n            </button>\r\n            <button class=\"btn btn-warning btn-sm\"\r\n                [routerLink]=\"['/form', 'edit', item.id]\">\r\n                Edit\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n<div class=\"col-xs-12 p-t-1\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/form/create\">\r\n        Create New Product\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_animations__ = __webpack_require__("../../../../../src/app/core/table.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = (function () {
    function TableComponent(model, activeRoute) {
        var _this = this;
        this.model = model;
        this.category = null;
        this.highlightCategory = "";
        activeRoute.params.subscribe(function (params) {
            _this.category = params["category"] || null;
        });
    }
    TableComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    TableComponent.prototype.getProducts = function () {
        var _this = this;
        return this.model.getProducts()
            .filter(function (p) { return _this.category == null || p.category == _this.category; });
    };
    Object.defineProperty(TableComponent.prototype, "categories", {
        get: function () {
            return this.model.getProducts()
                .map(function (p) { return p.category; })
                .filter(function (category, index, array) { return array.indexOf(category) == index; });
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.deleteProduct = function (key) {
        this.model.deleteProduct(key);
    };
    TableComponent.prototype.getRowState = function (category) {
        return this.highlightCategory == "" ? "" :
            this.highlightCategory == category ? "selected" : "notselected";
    };
    TableComponent.prototype.writeAnimationEvent = function (event, name, start) {
        console.log("Animation " + name + " " + (start ? 'Start' : 'Done')
            + " from: " + event.fromState + " to: " + event.toState + " time: "
            + event.totalTime);
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "paTable",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/core/table.component.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_3__table_animations__["a" /* HighlightTrigger */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_repository_model__["a" /* Model */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/unsaved.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsavedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_message_model__ = __webpack_require__("../../../../../src/app/messages/message.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnsavedGuard = (function () {
    function UnsavedGuard(messages, router) {
        this.messages = messages;
        this.router = router;
    }
    UnsavedGuard.prototype.canDeactivate = function (component, route, state) {
        var _this = this;
        if (component.editing) {
            if (["name", "category", "price"]
                .some(function (prop) { return component.product[prop]
                != component.originalProduct[prop]; })) {
                var subject_1 = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
                var responses = [
                    ["Yes", function () {
                            subject_1.next(true);
                            subject_1.complete();
                        }],
                    ["No", function () {
                            _this.router.navigateByUrl(_this.router.url);
                            subject_1.next(false);
                            subject_1.complete();
                        }]
                ];
                this.messages.reportMessage(new __WEBPACK_IMPORTED_MODULE_4__messages_message_model__["a" /* Message */]("Discard Changes?", true, responses));
                return subject_1;
            }
        }
        return true;
    };
    UnsavedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__messages_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], UnsavedGuard);
    return UnsavedGuard;
}());



/***/ }),

/***/ "../../../../../src/app/load.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_model__ = __webpack_require__("../../../../../src/app/messages/message.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadGuard = (function () {
    function LoadGuard(messages, router) {
        this.messages = messages;
        this.router = router;
        this.loaded = false;
    }
    LoadGuard.prototype.canLoad = function (route) {
        var _this = this;
        return this.loaded || new Promise(function (resolve, reject) {
            var responses = [
                ["Yes", function () {
                        _this.loaded = true;
                        resolve(true);
                    }],
                ["No", function () {
                        _this.router.navigateByUrl(_this.router.url);
                        resolve(false);
                    }]
            ];
            _this.messages.reportMessage(new __WEBPACK_IMPORTED_MODULE_3__messages_message_model__["a" /* Message */]("Do you want to load the module?", false, responses));
        });
    };
    LoadGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__messages_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], LoadGuard);
    return LoadGuard;
}());



/***/ }),

/***/ "../../../../../src/app/messages/errorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_model__ = __webpack_require__("../../../../../src/app/messages/message.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageErrorHandler = (function () {
    function MessageErrorHandler(messageService, ngZone) {
        this.messageService = messageService;
        this.ngZone = ngZone;
    }
    MessageErrorHandler.prototype.handleError = function (error) {
        var _this = this;
        var msg = error instanceof Error ? error.message : error.toString();
        this.ngZone.run(function () { return _this.messageService
            .reportMessage(new __WEBPACK_IMPORTED_MODULE_2__message_model__["a" /* Message */](msg, true)); }, 0);
    };
    MessageErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], MessageErrorHandler);
    return MessageErrorHandler;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lastMessage\" \r\nclass=\"bg-info p-a-1 text-xs-center\" \r\n[class.bg-danger]=\"lastMessage.error\">\r\n   <h4>{{lastMessage.text}}</h4> \r\n</div>\r\n<div class=\"text-xs-center m-b-1\">\r\n<button *ngFor=\"let resp of lastMessage?.responses; let i = index\" \r\n       (click)=\"resp[1](resp[0])\"\r\n       class=\"btn btn-primary m-a-1\" [class.btn-secondary]=\"i > 0\">\r\n   {{resp[0]}}\r\n</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/messages/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageComponent = (function () {
    function MessageComponent(messageService, router) {
        var _this = this;
        messageService.messages.subscribe(function (m) { return _this.lastMessage = m; });
        router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */] || e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */]; })
            .subscribe(function (e) { _this.lastMessage = null; });
    }
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "paMessages",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/messages/message.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(text, error, responses) {
        if (error === void 0) { error = false; }
        this.text = text;
        this.error = error;
        this.responses = responses;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_component__ = __webpack_require__("../../../../../src/app/messages/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errorHandler__ = __webpack_require__("../../../../../src/app/messages/errorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__message_component__["a" /* MessageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__message_component__["a" /* MessageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4__errorHandler__["a" /* MessageErrorHandler */] }]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MessageService.prototype.reportMessage = function (msg) {
        this.subject.next(msg);
    };
    Object.defineProperty(MessageService.prototype, "messages", {
        get: function () {
            return this.subject;
        },
        enumerable: true,
        configurable: true
    });
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/model/model.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_datasource__ = __webpack_require__("../../../../../src/app/model/rest.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_resolver__ = __webpack_require__("../../../../../src/app/model/model.resolver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* JsonpModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__repository_model__["a" /* Model */], __WEBPACK_IMPORTED_MODULE_3__rest_datasource__["b" /* RestDataSource */], __WEBPACK_IMPORTED_MODULE_4__model_resolver__["a" /* ModelResolver */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__rest_datasource__["a" /* REST_URL */], useValue: "http://localhost:3500/products" }]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/model.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_datasource__ = __webpack_require__("../../../../../src/app/model/rest.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_message_model__ = __webpack_require__("../../../../../src/app/messages/message.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModelResolver = (function () {
    function ModelResolver(model, dataSource, messages) {
        this.model = model;
        this.dataSource = dataSource;
        this.messages = messages;
    }
    ModelResolver.prototype.resolve = function (route, state) {
        if (this.model.getProducts().length == 0) {
            this.messages.reportMessage(new __WEBPACK_IMPORTED_MODULE_4__messages_message_model__["a" /* Message */]("Loading data..."));
            return this.dataSource.getData();
        }
    };
    ModelResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__repository_model__["a" /* Model */],
            __WEBPACK_IMPORTED_MODULE_2__rest_datasource__["b" /* RestDataSource */],
            __WEBPACK_IMPORTED_MODULE_3__messages_message_service__["a" /* MessageService */]])
    ], ModelResolver);
    return ModelResolver;
}());



/***/ }),

/***/ "../../../../../src/app/model/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/model/repository.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource__ = __webpack_require__("../../../../../src/app/model/rest.datasource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Model = (function () {
    function Model(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = new Array();
        this.locator = function (p, id) { return p.id == id; };
        this.dataSource.getData().subscribe(function (data) { return _this.products = data; });
    }
    Model.prototype.getProducts = function () {
        return this.products;
    };
    Model.prototype.getProduct = function (id) {
        var _this = this;
        return this.products.find(function (p) { return _this.locator(p, id); });
    };
    Model.prototype.getNextProductId = function (id) {
        var _this = this;
        var index = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (index > -1) {
            return this.products[this.products.length > index + 2
                ? index + 1 : 0].id;
        }
        else {
            return id || 0;
        }
    };
    Model.prototype.getPreviousProductid = function (id) {
        var _this = this;
        var index = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (index > -1) {
            return this.products[index > 0
                ? index - 1 : this.products.length - 1].id;
        }
        else {
            return id || 0;
        }
    };
    Model.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id == 0 || product.id == null) {
            this.dataSource.saveProduct(product)
                .subscribe(function (p) { return _this.products.push(p); });
        }
        else {
            this.dataSource.updateProduct(product).subscribe(function (p) {
                var index = _this.products
                    .findIndex(function (item) { return _this.locator(item, p.id); });
                _this.products.splice(index, 1, p);
            });
        }
    };
    Model.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dataSource.deleteProduct(id).subscribe(function () {
            var index = _this.products.findIndex(function (p) { return _this.locator(p, id); });
            if (index > -1) {
                _this.products.splice(index, 1);
            }
        });
    };
    Model = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource__["b" /* RestDataSource */]])
    ], Model);
    return Model;
}());



/***/ }),

/***/ "../../../../../src/app/model/rest.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RestDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
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







var REST_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]("rest_url");
var RestDataSource = (function () {
    function RestDataSource(http, url) {
        this.http = http;
        this.url = url;
    }
    RestDataSource.prototype.getData = function () {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Get, this.url);
    };
    RestDataSource.prototype.saveProduct = function (product) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Post, this.url, product);
    };
    RestDataSource.prototype.updateProduct = function (product) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Put, this.url + "/" + product.id, product);
    };
    RestDataSource.prototype.deleteProduct = function (id) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestMethod */].Delete, this.url + "/" + id);
    };
    RestDataSource.prototype.sendRequest = function (verb, url, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.set("Access-Key", "<secret>");
        headers.set("Application-Names", ["exampleApp", "proAngular"]);
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Request */]({
            method: verb,
            url: url,
            body: body,
            headers: headers
        }))
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw("Network Error: " + error.statusText + " (" + error.status + ")"); });
    };
    RestDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(REST_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String])
    ], RestDataSource);
    return RestDataSource;
}());



/***/ }),

/***/ "../../../../../src/app/terms.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_model__ = __webpack_require__("../../../../../src/app/messages/message.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermsGuard = (function () {
    function TermsGuard(messages, router) {
        this.messages = messages;
        this.router = router;
    }
    TermsGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (route.params["mode"] == "create") {
            return new Promise(function (resolve, reject) {
                var responses = [
                    ["Yes", function () { resolve(true); }],
                    ["No", function () {
                            _this.router.navigateByUrl(_this.router.url);
                            resolve(false);
                        }]
                ];
                _this.messages.reportMessage(new __WEBPACK_IMPORTED_MODULE_3__messages_message_model__["a" /* Message */]("Do you accept the terms & conditions?", false, responses));
            });
        }
        else {
            return true;
        }
    };
    TermsGuard.prototype.canActivateChild = function (route, state) {
        var _this = this;
        if (route.url.length > 0
            && route.url[route.url.length - 1].path == "categories") {
            return new Promise(function (resolve, reject) {
                var responses = [
                    ["Yes", function () { resolve(true); }],
                    ["No ", function () {
                            _this.router.navigateByUrl(state.url.replace("categories", "products"));
                            resolve(false);
                        }]
                ];
                _this.messages.reportMessage(new __WEBPACK_IMPORTED_MODULE_3__messages_message_model__["a" /* Message */]("Do you want to see the categories component?", false, responses));
            });
        }
        else {
            return true;
        }
    };
    TermsGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__messages_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], TermsGuard);
    return TermsGuard;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map