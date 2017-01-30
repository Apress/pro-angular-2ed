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
var router_1 = require("@angular/router");
var message_service_1 = require("./messages/message.service");
var message_model_1 = require("./messages/message.model");
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
            _this.messages.reportMessage(new message_model_1.Message("Do you want to load the module?", false, responses));
        });
    };
    LoadGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
    ], LoadGuard);
    return LoadGuard;
}());
exports.LoadGuard = LoadGuard;
