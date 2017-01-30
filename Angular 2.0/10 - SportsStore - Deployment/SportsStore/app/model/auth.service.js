import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import "rxjs/add/operator/map";
export var AuthService = (function () {
    function AuthService(datasource) {
        this.datasource = datasource;
    }
    AuthService.prototype.authenticate = function (username, password) {
        return this.datasource.authenticate(username, password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.datasource.auth_token != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.clear = function () {
        this.datasource.auth_token = null;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: RestDataSource, },
    ];
    return AuthService;
}());
