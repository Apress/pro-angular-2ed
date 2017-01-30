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
var repository_model_1 = require("./repository.model");
var rest_datasource_1 = require("./rest.datasource");
var message_service_1 = require("../messages/message.service");
var message_model_1 = require("../messages/message.model");
var ModelResolver = (function () {
    function ModelResolver(model, dataSource, messages) {
        this.model = model;
        this.dataSource = dataSource;
        this.messages = messages;
    }
    ModelResolver.prototype.resolve = function (route, state) {
        if (this.model.getProducts().length == 0) {
            this.messages.reportMessage(new message_model_1.Message("Loading data..."));
            return this.dataSource.getData();
        }
    };
    ModelResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [repository_model_1.Model, rest_datasource_1.RestDataSource, message_service_1.MessageService])
    ], ModelResolver);
    return ModelResolver;
}());
exports.ModelResolver = ModelResolver;
