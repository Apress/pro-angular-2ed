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
var core_1 = require("@angular/core");
var order_repository_1 = require("../model/order.repository");
var OrderTableComponent = (function () {
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
    OrderTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "orderTable.component.html"
        }), 
        __metadata('design:paramtypes', [order_repository_1.OrderRepository])
    ], OrderTableComponent);
    return OrderTableComponent;
}());
exports.OrderTableComponent = OrderTableComponent;
