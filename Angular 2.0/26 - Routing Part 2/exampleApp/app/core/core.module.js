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
var forms_1 = require("@angular/forms");
var model_module_1 = require("../model/model.module");
var table_component_1 = require("./table.component");
var form_component_1 = require("./form.component");
var state_pipe_1 = require("./state.pipe");
var message_module_1 = require("../messages/message.module");
var router_1 = require("@angular/router");
var productCount_component_1 = require("./productCount.component");
var categoryCount_component_1 = require("./categoryCount.component");
var notFound_component_1 = require("./notFound.component");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, model_module_1.ModelModule, message_module_1.MessageModule, router_1.RouterModule],
            declarations: [table_component_1.TableComponent, form_component_1.FormComponent, state_pipe_1.StatePipe,
                productCount_component_1.ProductCountComponent, categoryCount_component_1.CategoryCountComponent, notFound_component_1.NotFoundComponent],
            exports: [model_module_1.ModelModule, table_component_1.TableComponent, form_component_1.FormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
