webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model_module__ = __webpack_require__("../../../../../src/app/model/model.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_table_component__ = __webpack_require__("../../../../../src/app/core/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_form_component__ = __webpack_require__("../../../../../src/app/core/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_message_module__ = __webpack_require__("../../../../../src/app/messages/message.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_message_component__ = __webpack_require__("../../../../../src/app/messages/message.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__model_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_6__messages_message_module__["a" /* MessageModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__core_table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_5__core_form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_7__messages_message_component__["a" /* MessageComponent */]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sharedState_model__ = __webpack_require__("../../../../../src/app/core/sharedState.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_pipe__ = __webpack_require__("../../../../../src/app/core/state.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messages_message_module__ = __webpack_require__("../../../../../src/app/messages/message.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messages_message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messages_message_model__ = __webpack_require__("../../../../../src/app/messages/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__model_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_9__messages_message_module__["a" /* MessageModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_8__state_pipe__["a" /* StatePipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__model_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_4__table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_6__sharedState_model__["b" /* SHARED_STATE */],
                    deps: [__WEBPACK_IMPORTED_MODULE_10__messages_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_12__model_repository_model__["a" /* Model */]],
                    useFactory: function (messageService, model) {
                        var subject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
                        subject.subscribe(function (m) { return messageService.reportMessage(new __WEBPACK_IMPORTED_MODULE_11__messages_message_model__["a" /* Message */](__WEBPACK_IMPORTED_MODULE_6__sharedState_model__["a" /* MODES */][m.mode] + (m.id != undefined
                            ? " " + model.getProduct(m.id).name : ""))); });
                        return subject;
                    }
                }]
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

module.exports = "<div class=\"bg-primary p-a-1\" [class.bg-warning]=\"editing\">\r\n    <h5>{{editing  ? \"Edit\" : \"Create\"}} Product</h5>\r\n    Last Event: {{ stateEvents | async | formatState }}\r\n</div>\r\n\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\" (reset)=\"resetForm()\" >\r\n\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input class=\"form-control\" name=\"name\" \r\n               [(ngModel)]=\"product.name\" required />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Category</label>\r\n        <input class=\"form-control\" name=\"category\" \r\n               [(ngModel)]=\"product.category\" required />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Price</label>\r\n        <input class=\"form-control\" name=\"price\" \r\n               [(ngModel)]=\"product.price\" \r\n               required pattern=\"^[0-9\\.]+$\" />\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" \r\n            [class.btn-warning]=\"editing\" [disabled]=\"form.invalid\">\r\n        {{editing ? \"Save\" : \"Create\"}}\r\n    </button>\r\n    <button type=\"reset\" class=\"btn btn-secondary\">Cancel</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_model__ = __webpack_require__("../../../../../src/app/model/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sharedState_model__ = __webpack_require__("../../../../../src/app/core/sharedState.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipWhile.js");
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









var FormComponent = (function () {
    function FormComponent(model, stateEvents) {
        var _this = this;
        this.model = model;
        this.stateEvents = stateEvents;
        this.product = new __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */]();
        this.editing = false;
        stateEvents
            .subscribe(function (update) {
            _this.product = new __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */]();
            if (update.id != undefined) {
                Object.assign(_this.product, _this.model.getProduct(update.id));
            }
            _this.editing = update.mode == __WEBPACK_IMPORTED_MODULE_3__sharedState_model__["a" /* MODES */].EDIT;
        });
    }
    FormComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */]();
            form.reset();
        }
    };
    FormComponent.prototype.resetForm = function () {
        this.product = new __WEBPACK_IMPORTED_MODULE_1__model_product_model__["a" /* Product */]();
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "paForm",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/core/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/form.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__sharedState_model__["b" /* SHARED_STATE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_repository_model__["a" /* Model */],
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/sharedState.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SharedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHARED_STATE; });
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

var SHARED_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* InjectionToken */]("shared_state");


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
        if (value instanceof __WEBPACK_IMPORTED_MODULE_1__sharedState_model__["c" /* SharedState */]) {
            var state = value;
            return __WEBPACK_IMPORTED_MODULE_1__sharedState_model__["a" /* MODES */][state.mode] + (state.id != undefined
                ? " " + this.model.getProduct(state.id).name : "");
        }
        else {
            return "<No Data>";
        }
    };
    StatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: "formatState",
            pure: true
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_repository_model__["a" /* Model */]])
    ], StatePipe);
    return StatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-bordered table-striped\">\r\n    <tr>\r\n        <th>ID</th><th>Name</th><th>Category</th><th>Price</th><th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let item of getProducts()\">\r\n        <td style=\"vertical-align:middle\">{{item.id}}</td>\r\n        <td style=\"vertical-align:middle\">{{item.name}}</td>\r\n        <td style=\"vertical-align:middle\">{{item.category}}</td>\r\n        <td style=\"vertical-align:middle\">\r\n            {{item.price | currency:\"USD\":true }}\r\n        </td>\r\n        <td class=\"text-xs-center\">\r\n            <button class=\"btn btn-danger btn-sm\" (click)=\"deleteProduct(item.id)\">\r\n                Delete\r\n            </button>\r\n            <button class=\"btn btn-warning btn-sm\" (click)=\"editProduct(item.id)\">\r\n                Edit\r\n            </button>\r\n        </td>\r\n    </tr>\r\n\r\n</table>\r\n<button class=\"btn btn-primary\" (click)=\"createProduct()\">\r\n    Create New Product\r\n</button>\r\n<button class=\"btn btn-danger\" (click)=\"deleteProduct(-1)\">\r\n    Generate HTTP Error\r\n</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_repository_model__ = __webpack_require__("../../../../../src/app/model/repository.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharedState_model__ = __webpack_require__("../../../../../src/app/core/sharedState.model.ts");
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



var TableComponent = (function () {
    function TableComponent(model, observer) {
        this.model = model;
        this.observer = observer;
    }
    TableComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    TableComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    TableComponent.prototype.deleteProduct = function (key) {
        this.model.deleteProduct(key);
    };
    TableComponent.prototype.editProduct = function (key) {
        this.observer.next(new __WEBPACK_IMPORTED_MODULE_2__sharedState_model__["c" /* SharedState */](__WEBPACK_IMPORTED_MODULE_2__sharedState_model__["a" /* MODES */].EDIT, key));
    };
    TableComponent.prototype.createProduct = function () {
        this.observer.next(new __WEBPACK_IMPORTED_MODULE_2__sharedState_model__["c" /* SharedState */](__WEBPACK_IMPORTED_MODULE_2__sharedState_model__["a" /* MODES */].CREATE));
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "paTable",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/core/table.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__sharedState_model__["b" /* SHARED_STATE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_repository_model__["a" /* Model */], Object])
    ], TableComponent);
    return TableComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]])
    ], MessageErrorHandler);
    return MessageErrorHandler;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lastMessage\" \r\nclass=\"bg-info p-a-1 text-xs-center\" \r\n[class.bg-danger]=\"lastMessage.error\">\r\n   <h4>{{lastMessage.text}}</h4> \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/messages/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/messages/message.service.ts");
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
    function MessageComponent(messageService) {
        var _this = this;
        messageService.messages.subscribe(function (m) { return _this.lastMessage = m; });
    }
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "paMessages",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/messages/message.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(text, error) {
        if (error === void 0) { error = false; }
        this.text = text;
        this.error = error;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__message_component__["a" /* MessageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__message_component__["a" /* MessageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4__errorHandler__["a" /* MessageErrorHandler */] }]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* JsonpModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__repository_model__["a" /* Model */], __WEBPACK_IMPORTED_MODULE_3__rest_datasource__["b" /* RestDataSource */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__rest_datasource__["a" /* REST_URL */], useValue: "http://" + location.hostname + ":3500/products" }]
        })
    ], ModelModule);
    return ModelModule;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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






var REST_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* InjectionToken */]("rest_url");
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
        })).map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw("Network Error: " + error.statusText + " (" + error.status + ")"); });
    };
    RestDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])(REST_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], String])
    ], RestDataSource);
    return RestDataSource;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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