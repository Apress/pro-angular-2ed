import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";
var PROTOCOL = "http";
var PORT = 3500;
export var RestDataSource = (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    RestDataSource.prototype.authenticate = function (user, pass) {
        var _this = this;
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(function (response) {
            var r = response.json();
            _this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    };
    RestDataSource.prototype.getProducts = function () {
        return this.sendRequest(RequestMethod.Get, "products");
    };
    RestDataSource.prototype.saveProduct = function (product) {
        return this.sendRequest(RequestMethod.Post, "products", product, true);
    };
    RestDataSource.prototype.updateProduct = function (product) {
        return this.sendRequest(RequestMethod.Put, "products/" + product.id, product, true);
    };
    RestDataSource.prototype.deleteProduct = function (id) {
        return this.sendRequest(RequestMethod.Delete, "products/" + id, null, true);
    };
    RestDataSource.prototype.getOrders = function () {
        return this.sendRequest(RequestMethod.Get, "orders", null, true);
    };
    RestDataSource.prototype.deleteOrder = function (id) {
        return this.sendRequest(RequestMethod.Delete, "orders/" + id, null, true);
    };
    RestDataSource.prototype.updateOrder = function (order) {
        return this.sendRequest(RequestMethod.Put, "orders/" + order.id, order, true);
    };
    RestDataSource.prototype.saveOrder = function (order) {
        return this.sendRequest(RequestMethod.Post, "orders", order);
    };
    RestDataSource.prototype.sendRequest = function (verb, url, body, auth) {
        if (auth === void 0) { auth = false; }
        var request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", "Bearer<" + this.auth_token + ">");
        }
        return this.http.request(request).map(function (response) { return response.json(); });
    };
    RestDataSource.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RestDataSource.ctorParameters = [
        { type: Http, },
    ];
    return RestDataSource;
}());
