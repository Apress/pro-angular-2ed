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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PROTOCOL = "http";
var PORT = 3500;
var RestDataSource = (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    RestDataSource.prototype.getProducts = function () {
        return this.sendRequest(http_1.RequestMethod.Get, "products");
    };
    RestDataSource.prototype.saveOrder = function (order) {
        return this.sendRequest(http_1.RequestMethod.Post, "orders", order);
    };
    RestDataSource.prototype.sendRequest = function (verb, url, body) {
        return this.http.request(new http_1.Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        })).map(function (response) { return response.json(); });
    };
    RestDataSource = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestDataSource);
    return RestDataSource;
}());
exports.RestDataSource = RestDataSource;
