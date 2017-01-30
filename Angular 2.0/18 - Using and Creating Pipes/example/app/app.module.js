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
var platform_browser_1 = require("@angular/platform-browser");
var component_1 = require("./component");
var forms_1 = require("@angular/forms");
var attr_directive_1 = require("./attr.directive");
var twoway_directive_1 = require("./twoway.directive");
var structure_directive_1 = require("./structure.directive");
var iterator_directive_1 = require("./iterator.directive");
var cellColor_directive_1 = require("./cellColor.directive");
var cellColorSwitcher_directive_1 = require("./cellColorSwitcher.directive");
var productTable_component_1 = require("./productTable.component");
var productForm_component_1 = require("./productForm.component");
var toggleView_component_1 = require("./toggleView.component");
var addTax_pipe_1 = require("./addTax.pipe");
var categoryFilter_pipe_1 = require("./categoryFilter.pipe");
//import { LOCALE_ID } from "@angular/core";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [component_1.ProductComponent, attr_directive_1.PaAttrDirective, twoway_directive_1.PaModel,
                structure_directive_1.PaStructureDirective, iterator_directive_1.PaIteratorDirective,
                cellColor_directive_1.PaCellColor, cellColorSwitcher_directive_1.PaCellColorSwitcher, productTable_component_1.ProductTableComponent,
                productForm_component_1.ProductFormComponent, toggleView_component_1.PaToggleView, addTax_pipe_1.PaAddTaxPipe,
                categoryFilter_pipe_1.PaCategoryFilterPipe],
            //providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
            bootstrap: [component_1.ProductComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
