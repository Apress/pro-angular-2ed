import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { StoreComponent } from "./store/store.component";
export var StoreFirstGuard = (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StoreFirstGuard.ctorParameters = [
        { type: Router, },
    ];
    return StoreFirstGuard;
}());
