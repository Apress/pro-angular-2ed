import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
export var AuthGuard = (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    };
    AuthGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = [
        { type: Router, },
        { type: AuthService, },
    ];
    return AuthGuard;
}());
