import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
export var CartDetailComponent = (function () {
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    CartDetailComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "cartDetail.component.html"
                },] },
    ];
    /** @nocollapse */
    CartDetailComponent.ctorParameters = [
        { type: Cart, },
    ];
    return CartDetailComponent;
}());
