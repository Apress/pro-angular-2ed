import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
export var AuthComponent = (function () {
    function AuthComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthComponent.prototype.authenticate = function (form) {
        var _this = this;
        if (form.valid) {
            this.auth.authenticate(this.username, this.password)
                .subscribe(function (response) {
                if (response) {
                    _this.router.navigateByUrl("/admin/main");
                }
                _this.errorMessage = "Authentication Failed";
            });
        }
        else {
            this.errorMessage = "Form Data Invalid";
        }
    };
    AuthComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "auth.component.html"
                },] },
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = [
        { type: Router, },
        { type: AuthService, },
    ];
    return AuthComponent;
}());
