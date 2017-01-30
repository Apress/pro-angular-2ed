import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    moduleId: module.id,
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {

    constructor(public cart: Cart) { }
}
