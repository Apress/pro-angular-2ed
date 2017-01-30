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
var common_1 = require("@angular/common");
var ondemand_component_1 = require("./ondemand.component");
var router_1 = require("@angular/router");
var first_component_1 = require("./first.component");
var second_component_1 = require("./second.component");
var routing = router_1.RouterModule.forChild([
    {
        path: "",
        component: ondemand_component_1.OndemandComponent,
        children: [
            {
                path: "",
                children: [
                    { outlet: "primary", path: "", component: first_component_1.FirstComponent, },
                    { outlet: "left", path: "", component: second_component_1.SecondComponent, },
                    { outlet: "right", path: "", component: second_component_1.SecondComponent, },
                ]
            },
            {
                path: "swap",
                children: [
                    { outlet: "primary", path: "", component: second_component_1.SecondComponent, },
                    { outlet: "left", path: "", component: first_component_1.FirstComponent, },
                    { outlet: "right", path: "", component: first_component_1.FirstComponent, },
                ]
            },
        ]
    },
]);
var OndemandModule = (function () {
    function OndemandModule() {
    }
    OndemandModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing],
            declarations: [ondemand_component_1.OndemandComponent, first_component_1.FirstComponent, second_component_1.SecondComponent],
            exports: [ondemand_component_1.OndemandComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OndemandModule);
    return OndemandModule;
}());
exports.OndemandModule = OndemandModule;
