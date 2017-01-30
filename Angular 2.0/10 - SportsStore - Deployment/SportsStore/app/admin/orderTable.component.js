import { Component } from "@angular/core";
import { OrderRepository } from "../model/order.repository";
export var OrderTableComponent = (function () {
    function OrderTableComponent(repository) {
        this.repository = repository;
        this.includeShipped = false;
    }
    OrderTableComponent.prototype.getOrders = function () {
        var _this = this;
        return this.repository.getOrders()
            .filter(function (o) { return _this.includeShipped || !o.shipped; });
    };
    OrderTableComponent.prototype.markShipped = function (order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    };
    OrderTableComponent.prototype.delete = function (id) {
        this.repository.deleteOrder(id);
    };
    OrderTableComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "orderTable.component.html"
                },] },
    ];
    /** @nocollapse */
    OrderTableComponent.ctorParameters = [
        { type: OrderRepository, },
    ];
    return OrderTableComponent;
}());
