import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
export var CartSummaryComponent = (function () {
    function CartSummaryComponent(cart) {
        this.cart = cart;
    }
    CartSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: "cart-summary",
                    moduleId: module.id,
                    templateUrl: "cartSummary.component.html"
                },] },
    ];
    /** @nocollapse */
    CartSummaryComponent.ctorParameters = [
        { type: Cart, },
    ];
    return CartSummaryComponent;
}());
