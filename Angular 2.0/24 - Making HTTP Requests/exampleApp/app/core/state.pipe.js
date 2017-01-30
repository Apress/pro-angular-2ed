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
var sharedState_model_1 = require("./sharedState.model");
var repository_model_1 = require("../model/repository.model");
var StatePipe = (function () {
    function StatePipe(model) {
        this.model = model;
    }
    StatePipe.prototype.transform = function (value) {
        if (value instanceof sharedState_model_1.SharedState) {
            var state = value;
            return sharedState_model_1.MODES[state.mode] + (state.id != undefined
                ? " " + this.model.getProduct(state.id).name : "");
        }
        else {
            return "<No Data>";
        }
    };
    StatePipe = __decorate([
        core_1.Pipe({
            name: "formatState",
            pure: true
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model])
    ], StatePipe);
    return StatePipe;
}());
exports.StatePipe = StatePipe;
