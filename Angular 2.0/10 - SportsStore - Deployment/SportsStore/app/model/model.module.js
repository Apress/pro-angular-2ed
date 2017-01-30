import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth.service";
export var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpModule],
                    providers: [ProductRepository, Cart, Order, OrderRepository,
                        { provide: StaticDataSource, useClass: RestDataSource },
                        RestDataSource, AuthService]
                },] },
    ];
    /** @nocollapse */
    ModelModule.ctorParameters = [];
    return ModelModule;
}());
