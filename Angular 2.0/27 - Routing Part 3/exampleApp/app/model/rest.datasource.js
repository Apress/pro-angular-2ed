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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/delay");
exports.REST_URL = new core_1.OpaqueToken("rest_url");
var RestDataSource = (function () {
    function RestDataSource(http, url) {
        this.http = http;
        this.url = url;
    }
    RestDataSource.prototype.getData = function () {
        return this.sendRequest(http_1.RequestMethod.Get, this.url);
    };
    RestDataSource.prototype.saveProduct = function (product) {
        return this.sendRequest(http_1.RequestMethod.Post, this.url, product);
    };
    RestDataSource.prototype.updateProduct = function (product) {
        return this.sendRequest(http_1.RequestMethod.Put, this.url + "/" + product.id, product);
    };
    RestDataSource.prototype.deleteProduct = function (id) {
        return this.sendRequest(http_1.RequestMethod.Delete, this.url + "/" + id);
    };
    RestDataSource.prototype.sendRequest = function (verb, url, body) {
        var headers = new http_1.Headers();
        headers.set("Access-Key", "<secret>");
        headers.set("Application-Names", ["exampleApp", "proAngular"]);
        return this.http.request(new http_1.Request({
            method: verb,
            url: url,
            body: body,
            headers: headers
        }))
            .delay(2000)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw("Network Error: " + error.statusText + " (" + error.status + ")"); });
    };
    RestDataSource = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(exports.REST_URL)), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], RestDataSource);
    return RestDataSource;
}());
exports.RestDataSource = RestDataSource;
