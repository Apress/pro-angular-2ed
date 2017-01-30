import { Component } from "@angular/core";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";
export var CheckoutComponent = (function () {
    function CheckoutComponent(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    CheckoutComponent.prototype.submitOrder = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(function (order) {
                _this.order.clear();
                _this.orderSent = true;
                _this.submitted = false;
            });
        }
    };
    CheckoutComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "checkout.component.html",
                    styleUrls: ["checkout.component.css"]
                },] },
    ];
    /** @nocollapse */
    CheckoutComponent.ctorParameters = [
        { type: OrderRepository, },
        { type: Order, },
    ];
    return CheckoutComponent;
}());
